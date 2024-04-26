import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import { toOrdinal } from "../../utils/ordinal.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";
import { formatErrMsg } from "../../utils/format.str.util";

const GetLeaderboardController = catchAsync(
  async (req: Request, res: Response) => {
    const { competitionId } = req.params;
    let { currentPage, perPage } = req.query;
    const pageSize = +(perPage as string) || 10;
    const pgNum = +(currentPage as string) || 1;
    const skip = (pgNum - 1) * pageSize;
    const totalCount = await prisma.competition.count();
    const totalPages = Math.ceil(totalCount / pageSize);
    const userId = req.user?.id as string;

    try {
      const competition = await prisma.competition.findUnique({
        where: { id: competitionId },
        include: {
          joinedUsers: {
            select: {
              user: true,
              joinedDate: true,
            },
          },
        },
      });

      if (!competition) {
        return errorResponse({
          message: "Competition not found!",
          status: 404,
          res,
        });
      }

      let userWithDetails = competition.joinedUsers.map((data) => ({
        index: 0,
        user: data.user,
        point: competition.totalPoint,
        position: "",
        joinedDate: data.joinedDate,
        isUser: data.user.id === userId,
      }));

      // Sort users by totalPoints in descending order
      userWithDetails.sort((a, b) => b.point - a.point);

      // Add position to each user
      userWithDetails.forEach((data, id) => {
        {
          data.index = id + 1
          data.position = toOrdinal(id + 1);
        }
      });

      // Paginate Result
      userWithDetails = userWithDetails.slice(skip, skip + pageSize);

      return successResponse({
        message: "Fetch successfully",
        data: userWithDetails,
        res,
        other: {
          totalCount,
          totalPages,
        },
      });
    } catch (err: any) {
      return errorResponse({
        message: formatErrMsg(err.message) || err.message || "An error occurred",
        status: 500,
        res,
      });
    }
  }
);

export default GetLeaderboardController;

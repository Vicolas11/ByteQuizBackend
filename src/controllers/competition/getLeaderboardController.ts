import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { toOrdinal } from "../../utils/ordinal.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetLeaderboardController = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    let { currentPage, perPage } = req.query;
    const pageSize = +(perPage as string) || 10;
    const pgNum = +(currentPage as string) || 1;
    const skip = (pgNum - 1) * pageSize;
    const totalCount =
      (
        await prisma.competitionToUser.findMany({
          where: { competitionId: id },
        })
      ).length || 0;
    const totalPages = Math.ceil(totalCount / pageSize);
    const userId = req.user?.id as string;

    try {
      // Check if competition exist
      const competition = await prisma.competition.findUnique({
        where: { id },
      });

      if (!competition) {
        return errorResponse({
          message: "Competition not found!",
          status: 404,
          res,
        });
      }

      const competitionToUser = await prisma.competitionToUser.findMany({
        where: { competitionId: competition.id },
        include: {
          user: {
            select: {
              id: true,
              username: true,
              email: true,
              avatar: true,
              gender: true,
            },
          },
        },
      });

      if (!competitionToUser) {
        return errorResponse({
          message: "Competition not found!",
          status: 404,
          res,
        });
      }

      let userWithDetails = competitionToUser.map((data) => ({
        index: 0,
        user: data.user,
        point: data.totalPoint,
        position: "",
        joinedDate: data.joinedDate,
        isUser: data.userId === userId,
      }));

      // Sort users by totalPoints and Date in descending order
      userWithDetails.sort((a, b) => {
        if (b.point !== a.point) {
          return b.point - a.point;
        }

        return (
          new Date(a.joinedDate).getTime() - new Date(b.joinedDate).getTime()
        );
      });

      // Add position to each user
      userWithDetails.forEach((data, id) => {
        {
          data.index = id + 1;
          data.position = toOrdinal(id + 1);
        }
      });

      // Paginate Result
      userWithDetails = userWithDetails.slice(skip, skip + pageSize);

      return successResponse({
        message: "Fetched successfully",
        data: userWithDetails,
        res,
        other: {
          totalCount,
          totalPages,
        },
      });
    } catch (err: any) {
      return errorResponse({
        message:
          formatErrMsg(err.message) || err.message || "An error occurred",
        status: 500,
        res,
      });
    }
  }
);

export default GetLeaderboardController;

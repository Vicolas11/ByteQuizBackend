import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetJoinedCompetitionController = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user?.id as string;
    let { currentPage, perPage } = req.query;
    const pageSize = +(perPage as string) || 10;
    const pgNum = +(currentPage as string) || 1;
    const skip = (pgNum - 1) * pageSize;
    const totalCount = (
      await prisma.competitionToUser.findMany({
        where: { userId },
      })
    ).length || 0;
    const totalPages = Math.ceil(totalCount / pageSize);

    try {
      const competitionToUser = await prisma.competitionToUser.findMany({
        where: { userId },
        orderBy: { joinedDate: "asc" },
        select: {
          competition: {
            include: {
              createdBy: {
                select: {
                  id: true,
                  username: true,
                  email: true,
                  avatar: true,
                },
              },
            },
          },
        },
        take: pageSize,
        skip,
      });

      if (!competitionToUser) {
        return errorResponse({
          message: "Competition not found!",
          status: 404,
          res,
        });
      }

      const joinedCompetition = competitionToUser.map(
        (data) => data.competition
      );

      return successResponse({
        message: "Fetched successfully",
        data: joinedCompetition,
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

export default GetJoinedCompetitionController;

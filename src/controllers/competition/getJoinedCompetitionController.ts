import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { toOrdinal } from "../../utils/ordinal.util";
import { getRemark } from "../../utils/remarks.util";
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
    const totalCount =
      (
        await prisma.competitionToUser.findMany({
          where: { userId },
        })
      ).length || 0;
    const totalPages = Math.ceil(totalCount / pageSize);

    try {
      const competitionToUser = await prisma.competitionToUser.findMany({
        where: { userId },
        orderBy: { joinedDate: "desc" },
        select: {
          joinedDate: true,
          totalPoint: true,
          user: {
            select: {
              id: true,
            },
          },
          competition: {
            select: {
              id: true,
              title: true,
              createdAt: true,
              overallPoint: true,
              createdBy: {
                select: {
                  id: true,
                  username: true,
                  email: true,
                },
              },
            },
          },
        },
        take: pageSize,
        skip,
      });

      // Include User's position in that Competition
      const joinedCompetition = await Promise.all(
        competitionToUser.map(async (data) => {
          const competitionToUser = await prisma.competitionToUser.findMany({
            where: { competitionId: data.competition.id },
            include: {
              user: {
                select: {
                  id: true,
                },
              },
            },
          });

          let userWithDetails = competitionToUser.map((data) => ({
            index: 0,
            position: "",
            point: data.totalPoint,
            joinedDate: data.joinedDate,
            user: data.userId,
          }));

          // Sort users by totalPoints and Date in descending order
          userWithDetails.sort((a, b) => {
            if (b.point !== a.point) {
              return b.point - a.point;
            }

            return (
              new Date(a.joinedDate).getTime() -
              new Date(b.joinedDate).getTime()
            );
          });

          // Add position to each user
          userWithDetails.forEach((data, id) => {
            data.index = id + 1;
            data.position = toOrdinal(id + 1);
          });

          const getData = userWithDetails.filter((dt) => dt.user === userId);
          const overallPoint = data.competition.overallPoint;
          const totalPoint = data.totalPoint;
          const percentage = (totalPoint / overallPoint) * 100;
          const remark = getRemark(percentage);
          const { createdBy, ...rest } = data.competition;

          return {
            ...rest,
            authorUsername: createdBy.username,
            authorEmail: createdBy.email,
            joinedDate: data.joinedDate,
            point: data.totalPoint,
            remark,
            position: getData[0].position,
          };
        })
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

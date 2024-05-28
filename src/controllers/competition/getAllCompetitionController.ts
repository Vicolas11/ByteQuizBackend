import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetAllCompetitionController = catchAsync(
  async (req: Request, res: Response) => {
    let { currentPage, perPage } = req.query;
    const pageSize = +(perPage as string) || 10;
    const pgNum = +(currentPage as string) || 1;
    const skip = (pgNum - 1) * pageSize;
    const totalCount = await prisma.competition.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    try {
      const competitions = await prisma.competition.findMany({
        orderBy: { createdAt: "desc" },
        include: {
          createdBy: {
            select: {
              id: true,
              username: true,
              email: true,
              avatar: true
            }
          },
          joinedUsers: {
            select: {
              userId: true
            }
          }
        },      
        take: pageSize,
        skip,
      });

      return successResponse({
        message: "Fetch successfully",
        data: competitions,
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

export default GetAllCompetitionController;

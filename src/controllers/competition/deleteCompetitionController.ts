import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import { formatErrMsg } from "../../utils/format.str.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const DeleteCompetitionController = catchAsync(
  async (req: Request, res: Response) => {
    let { id } = req.params;
    const userId = req.user?.id;

    try {
      const competition = await prisma.competition.findFirst({
        where: { AND: [{ id }] },
        include: {
          questions: true,
        },
      });

      if (!competition) {
        return errorResponse({
          message: "Competition not found!",
          status: 404,
          res,
        });
      }

      // Check if it's the loginUser
      if (competition.createdUserId !== userId) {
        return errorResponse({
          message: "You don't have permission to perform this request!",
          status: 401,
          res,
        });
      }

      await prisma.competition.delete({ where: { id } });

      return successResponse({
        status: 200,
        message: "Deleted competition successfully!",
        data: null,
        res,
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

export default DeleteCompetitionController;

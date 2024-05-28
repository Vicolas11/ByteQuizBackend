import GetJoinedCompetitionController from "../controllers/competition/getJoinedCompetitionController";
import CreateCompetitionController from "../controllers/competition/createCompetitionController";
import DeleteCompetitionController from "../controllers/competition/deleteCompetitionController";
import GetAllCompetitionController from "../controllers/competition/getAllCompetitionController";
import JoinedCompetitionController from "../controllers/competition/joinedCompetitionController";
import SubmitCompetitionController from "../controllers/competition/submitCompetitionController";
import UpdateCompetitionController from "../controllers/competition/updateCompetitionController";
import GetCompetitionController from "../controllers/competition/getCompetitionController";
import GetLeaderboardController from "../controllers/competition/getLeaderboardController";
import FeedbackController from "../controllers/competition/FeedbackController";
import { authenticateToken } from "../middlewares/authenticateToken";
import { validateRequest } from "../middlewares/validateRequest";
import { Router } from "express";
import {
  CompetitionBoardSchema,
  CompetitionInputSchema,
  CompetitionParamsSchema,
  CompetitionQuerySchema,
  CompetitionSubInpSchema,
  CompetitionUpdInputSchema,
} from "../joi/competition.joi";

const competitionRouters = Router();

competitionRouters.use(authenticateToken);

competitionRouters.post(
  "/competitions",
  validateRequest(CompetitionInputSchema),
  CreateCompetitionController
);

competitionRouters.get(
  "/competitions",
  validateRequest(CompetitionQuerySchema, "query"),
  GetAllCompetitionController
);

competitionRouters.get(
  "/competitions/joined",
  validateRequest(CompetitionQuerySchema, "query"),
  GetJoinedCompetitionController
);

competitionRouters.get(
  "/competitions/:id",
  validateRequest(CompetitionParamsSchema, "params"),
  GetCompetitionController
);

competitionRouters.patch(
  "/competitions",
  validateRequest(CompetitionUpdInputSchema),
  UpdateCompetitionController
);

competitionRouters.delete(
  "/competitions/:id",
  validateRequest(CompetitionParamsSchema, "params"),
  DeleteCompetitionController
);

competitionRouters.post(
  "/competitions/:id/join",
  validateRequest(CompetitionParamsSchema, "params"),
  JoinedCompetitionController
);

competitionRouters.patch(
  "/competitions/submit",
  validateRequest(CompetitionSubInpSchema),
  SubmitCompetitionController
);

competitionRouters.get(
  "/feedback/:id",
  validateRequest(CompetitionParamsSchema, "params"),
  FeedbackController
);

competitionRouters.get(
  "/competitions/:id/leaderboard",
  validateRequest(CompetitionBoardSchema, "params"),
  GetLeaderboardController
);

export default competitionRouters;

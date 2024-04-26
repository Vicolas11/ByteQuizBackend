import { authenticateToken } from "../middlewares/authenticateToken";
import { validateRequest } from "../middlewares/validateRequest";
import { Router } from "express";

const competitionRouters = Router();

competitionRouters.use(authenticateToken);


export default competitionRouters;

import { NextFunction, Request, Response } from "express";
import { removeSlash } from "../utils/removeslash.utils";
import { errorResponse } from "../utils/errorResponse";
import { validate as isUUID } from "uuid";
import Joi from "joi";

export const validateRequest = (
  schema: Joi.ObjectSchema,
  reqKey?: "body" | "params" | "query"
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[reqKey || "body"]);
    const { id: idParams } = req.params;

    if (error) {
      return errorResponse({
        message:
          removeSlash(error.details[0].message) ||
          `${error.details.map((err) => removeSlash(err.message))}` ||
          "Invalid input",
        status: 400,
        res,
      });
    }

    // Validate the UUID format
    if (idParams && !isUUID(idParams)) {
      return errorResponse({
        message: "Invalid ID format!",
        status: 400,
        res,
      });
    }

    next();
  };
};

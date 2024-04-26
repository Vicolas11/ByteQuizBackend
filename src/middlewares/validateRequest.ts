import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils/errorResponse";
import Joi from "joi";
import { removeSlash } from "../utils/removeslash.utils";

export const validateRequest = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
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
    next();
  };
};

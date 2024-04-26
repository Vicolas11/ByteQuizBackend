import express, { Application, NextFunction, Request, Response as Res } from "express";
import { errorResponse } from "./utils/errorResponse";
import { envConfig } from "./configs/env.config";
import userRouters from "./routers/user.router";
import { auth } from "express-openid-connect";
import { Response } from "http-status-codez";
import { startServer } from "./server";
import compression from "compression";
import xssShield from "xss-shield";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import quizRouters from "./routers/quiz.router";
import { PrismaClientValidationError } from "@prisma/client/runtime/binary";

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   baseURL: 'http://localhost:8080',
//   clientID: 'U7kmJ347h8gtOANuH0mwA3UaEmGG30W7',
//   issuerBaseURL: 'http://dev-6o1xkh1qdkvnfu6p.us.auth0.com/',
//   secret: 'LONG_RANDOM_STRING'
// };

(async () => {
  // Initialized Express Application
  const app: Application = express();

  // Prevent Cross-site Scripting Attack
  app.use(xssShield.xssShield());

  // auth router attaches /login, /logout, and /callback routes to the baseURL
  // app.use(auth(config));

  // Enables Cross-Origin Resource Sharing for various methods(POST,GET,DELETE...)
  app.use(cors());

  // Parses incoming requests with JSON payloads
  app.use(express.json({ limit: "1mb" }));

  // Parses incoming requests with urlencoded payloads
  app.use(express.urlencoded({ extended: true }));

  // Compress response bodies for every request
  app.use(compression());

  // Add secure HTTP headers
  app.use(
    helmet({
      crossOriginEmbedderPolicy: !envConfig.dev,
      contentSecurityPolicy: !envConfig.dev,
    })
  );

  // Logger middleware using Morgan
  app.use(
    morgan(
      ":date :method :url :status :response-time ms - :res[content-length]"
    )
  );

  app.get("/", (_req: Request, res: Res) => {
    res.send(
      '<h1 style="text-align: center;">ByteQuiz Server is Ready 👌!</h1>'
    );
  });

  app.use((err: any, req: Request, res: Res, next: NextFunction) => {
    if (err instanceof PrismaClientValidationError) {
      const status = Response.HTTP_CONFLICT;
      const message = err.message.replace(/\n/g, '');
      res.status(status).json({
        statusCode: status,
        message: message
      });
    } else {
      next(err);
    }
  });

  app.use("/api/auth", userRouters);
  app.use("/api", quizRouters);

  app.all("*", (req, res) =>
    errorResponse({
      message: `Can't find ${req.originalUrl} on this route.`,
      status: Response.HTTP_NOT_FOUND,
      res,
    })
  );

  // Start Server
  startServer(app);
})();

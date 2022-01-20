import Express from "express"
import { pullRequestRouter } from "./PR"
import * as winston from 'winston';
import * as expressWinston from 'express-winston';

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
      winston.format.json(),
      winston.format.prettyPrint(),
      winston.format.colorize({ all: true })
  ),
};

export const initExpressApp = (): Express.Application => {
  const app = Express();
  app.use(Express.urlencoded({ extended: true }));
  app.use(expressWinston.logger(loggerOptions));
  app.get('/', function (req, res) {
    res.send('please see READEME. routes available: /pulls?repo={owner}/{reponame} and /pulls/{prnumber}?repo={owner}/{reponame}')
  })
  app.use("/pulls", pullRequestRouter());
  return app;
}
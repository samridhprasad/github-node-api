import Express from "express"
import { pullRequestRouter } from "./PR"

export const initExpressApp = (): Express.Application => {
  const app = Express();
  app.use(Express.urlencoded({ extended: true }));
  app.get('/', function (req, res) {
    res.send('please see READEME. routes available: /pulls?repo={owner}/{reponame} and /pulls/{prnumber}?repo={owner}/{reponame}')
  })
  app.use("/pulls", pullRequestRouter());
  return app;
}
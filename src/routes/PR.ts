import Express from "express"
import { GetAllPullRequests, GetPullRequest } from "../controllers/PR";

export const pullRequestRouter = (): Express.Router => {
  const router = Express.Router();
  router.get("/:pr", GetPullRequest);
  router.get("/", GetAllPullRequests);
  return router;
}
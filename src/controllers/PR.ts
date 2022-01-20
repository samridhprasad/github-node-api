import Express from "express";
import * as Github from "../utils/github";
import parseRepoUrl from "../utils/github";
import {
  GetAllPullRequestsModel,
  GetSinglePullRequestModel,
} from "../model/PR";
import { invalidPRObject, invalidRepoAndPRObject, invalidRepoObject } from "../utils/errors";

export const GetAllPullRequests = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const query = GetAllPullRequestsModel.query.validate(req.query);

    if (query.error) {
      res.status(404).send(invalidRepoObject);
      // res.json({ invalidRepoObject });
      return;
    }

    const repo = parseRepoUrl(query.value.repo);
    const page = query.value.page as number;
    const per_page = query.value.per_page as number;

    const pullRequests = await Github.ListPullRequests(repo, per_page, page);

    res.json(pullRequests);
  } catch (err) {
    res.status(404).send(invalidRepoObject);
    // res.json({ error: err });
  }
};

export const GetPullRequest = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const query = GetSinglePullRequestModel.query.validate(req.query);
    const params = GetSinglePullRequestModel.params.validate(req.params);

    if (query.error) {
      res.status(404).send(invalidRepoObject);
      // res.json({ invalidRepoObject });
      return;
    }

    if (params.error) {
      // res.json({ invalidPRObject });
      res.status(404).send(invalidPRObject); 
      return;
    }

    const repo = parseRepoUrl(query.value.repo);
    const pr = params.value.pr as number;

    const pullRequest = await Github.GetPullRequest(repo, pr);
    let commitsObject = { total_number_of_commits: pullRequest.commits };
    let responseObject = Object.assign(commitsObject, pullRequest);
    res.json(responseObject);
  } catch (err) {
    res.status(404).send(invalidPRObject);
  }
};

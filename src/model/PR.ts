import Joi from "joi";

export const GetAllPullRequestsModel = {
  query: Joi.object({
    repo: Joi.string().required(),
    page: Joi.number().integer().optional().min(1).default(1),
    per_page: Joi.number().integer().optional().min(1).default(20),
  }),
};

export const GetSinglePullRequestModel = {
  query: Joi.object({
    repo: Joi.string().required(),
  }),
  params: Joi.object({
    pr: Joi.number().integer().required(),
  }),
};

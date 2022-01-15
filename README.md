# github-node-api
## Requirements
- Make a REST API to return info for the open pull requests in a GitHub repository
- For each **open PR**, the number of commits is returned by making multiple requests via the REST api to fetch the data necessaryCancel changes
- Has one or more API endpoints
- An interface that accepts a repository URL, eg. [Zod](https://github.com/colinhacks/zod)
- Implement a testing strategy (Postman)

## Build and Run instructions
Step 0. 
- Generate [a PAT from Github](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with repo access
- Create a .env file in the root of the project following the `env.example` that already exists
- Save .env with your token value

Step 1. `npm i` to install dependencies

Step 2. `npm run build`

Step 3. `npm run start`

## Accessing end-points

Example requests: 
### Get all open PRs under a repo
```
GET localhost:8080/pulls?repo=facebook/react
```
### Get total number of commits under a specific PR along with the PR's metadata

```
GET localhost:8080/pulls/23144?repo=facebook/react
```
`GET /pulls` - Fetch a list of open pull requests for a given repository with given query params

**Available Query Parameters**

* **repo** - To pass the repository URL 
    * Fully qualified url: `https://github.com/owner/repo`
    * Schemaless: `github.com/owner/repo`
    * Just repo: `owner/repo`

## Postman Testing
I've exported a simple postman collection of requests I used to debug. Simply add your Github PAT to line 112 'value' field of api.postman_collection.json
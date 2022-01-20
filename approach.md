# Approach

1. Hit api.github.com to see what's the rate limit per hour without auth

`❯ curl -i -u samridhprasad https://api.github.com/users/samridhprasad`
 
```
x-ratelimit-limit: 60
x-ratelimit-remaining: 59
x-ratelimit-reset: 1642277683
x-ratelimit-used: 1
```

2. Using personal access token as auth

`❯ curl -i -u samridhprasad:$token https://api.github.com/zen`

```
x-ratelimit-limit: 5000
x-ratelimit-remaining: 4993
x-ratelimit-reset: 1642277770
x-ratelimit-used: 7
```
-----
## Conclusion
Need auth token to make meaningful interactions with github's api. 
export interface QueryOptions {
    type: "pr" | "issue";
    repo: string;
    state: "open" | "closed";
  }
  
  export const queryBy = (key: string, value: string) => `${key}:${value}`;
  
  export const QueryBuilder = (opts: QueryOptions): string => {
    const query = [];
    query.push(queryBy("type", opts.type));
    query.push(queryBy("repo", opts.repo));
    query.push(queryBy("state", opts.state));
    return query.join(" ");
  }
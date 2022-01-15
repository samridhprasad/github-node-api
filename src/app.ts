import { CustomLogger } from "./utils/logging";
import { Server } from "./utils/server";
import { initExpressApp } from "./routes";

export const run = (host: string, port: number) => {

  const app = initExpressApp();
  const logger = new CustomLogger();
  const server = new Server({
    host,
    port,
    app,
    logger,
  });

  try {
    server.start(() => {
      logger.info("server running on", server.address(true));
    });
  } catch (err) {
    logger.error(err);
  }
}

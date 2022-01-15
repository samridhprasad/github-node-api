import { CustomLogger } from "./logging";
import Express from "express"
import http from "http"
import { AddressInfo } from "net";

export interface ServerOptions {
  host: string;
  port: number;
  app: Express.Application;
  logger?: CustomLogger;
}

export class Server {

  app: Express.Application;
  host: string;
  port: number;
  logger: CustomLogger;
  socket: http.Server;

  constructor({ host, port, app, logger }: ServerOptions) {
    this.host = host;
    this.port = port;
    this.app = app;
    this.logger = logger ?? new CustomLogger();
    this.socket = http.createServer(this.app);
  }

  start(onListen: () => void) {
    this.socket.listen(this.port, this.host, () => {
      const addr = this.socket.address() as AddressInfo;
      this.host = addr.address;
      this.port = addr.port;
      onListen();
    });
  }

  address(full: boolean = false): string {
    const schema = "http://";
    const address = `${this.host}:${this.port}`;
    return `${full && schema}${address}`;
  }
}

export class CustomLogger {

  log(...msg: any[]): void {
    console.log(...msg)
  }

  info(...msg: any[]): void {
    this.log("[INFO]:", ...msg)
  }
  
  warn(...msg: any[]): void {
    this.log("[WARN]:", ...msg)
  }

  error(...msg: any[]): void {
    this.log("[ERROR]:", ...msg)
  }
}
/**
 * A minimal logger interface
 */
export interface ILogger {
  /**
   * The id that the logger was created with.
   */
  readonly id: string;

  /**
   * Logs a debug message.
   *
   * @param message The message to log.
   * @param rest The data to log.
   */
  debug(message: string, ...rest: any[]): void;

  /**
   * Logs info.
   *
   * @param message The message to log.
   * @param rest The data to log.
   */
  info(message: string, ...rest: any[]): void;

  /**
   * Logs a warning.
   *
   * @param message The message to log.
   * @param rest The data to log.
   */
  warn(message: string, ...rest: any[]): void;

  /**
   * Logs an error.
   *
   * @param message The message to log.
   * @param rest The data to log.
   */
  error(message: string, ...rest: any[]): void;
}

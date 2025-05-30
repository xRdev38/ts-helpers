import winston from 'winston';

const { combine, errors, timestamp, splat, json, metadata } = winston.format;

const { npm } = winston.config;

/**
 * Pre-defined log levels for the logger.
 */
export const { levels } = npm;

/**
 * Represents a Logger instance from the Winston library.
 */
export type Logger = winston.Logger;

/**
 * Configuration for a parameter in the logging context.
 */
export interface ParameterConfig {
  [key: string]: {
    valueFromMethod: <T>(argument: string) => any;
    fallback?: string;
  };
}

/**
 * Configuration parameters for the logger.
 */
export interface ConfigParameters {
  parameters: ParameterConfig;
}

/**
 * Formats the error information in the log entry.
 */
const formatError = winston.format((info: any) => {
  if ('error' in info && info.error instanceof Error) {
    const {
      error: { message, stack, ...rest },
    } = info;
    info.error = { message, stack, ...rest };
  }
  return info;
});

/**
 * Formats the additional configuration parameters in the log entry.
 *
 * @param parameters - Configuration parameters for the logger.
 */
const formatConfigParameters = (parameters: ParameterConfig | undefined) => {
  return winston.format((info: any) => {
    if (parameters) {
      const keys: string[] = Object.keys(parameters);
      /* eslint-disable-next-line no-restricted-syntax */
      for (const key of keys) {
        const { valueFromMethod, fallback } = parameters[key];
        info[key] =
          typeof valueFromMethod === 'function' &&
          typeof valueFromMethod<string>(key) === 'string'
            ? valueFromMethod<string>(key)
            : fallback;
      }
    }
    return info;
  });
};

/**
 * Creates a Winston Logger instance with the specified configuration.
 *
 * @param options - Configuration options for the logger.
 * @returns The created Winston Logger instance.
 */
export const createLogger = ({
  logLevel = 'info',
  service,
  config,
}: {
  logLevel?: string;
  service?: string;
  config?: ConfigParameters | undefined;
}): winston.Logger => {
  const parameters =
    config && (config.parameters as ParameterConfig | undefined);

  return winston.createLogger({
    level: logLevel,
    format: combine(
      errors({ stack: true }),
      timestamp(),
      splat(),
      metadata({
        fillExcept: [
          'message',
          'level',
          'timestamp',
          'service',
          'type',
          'error',
        ],
      }),
      formatError(),
      formatConfigParameters(parameters)(),
      json()
    ),
    transports: [
      new winston.transports.Console({
        handleExceptions: true,
        handleRejections: true,
      }),
    ],
    exitOnError: false,
    defaultMeta: { type: 'application', ...(service && { service }) },
  });
};

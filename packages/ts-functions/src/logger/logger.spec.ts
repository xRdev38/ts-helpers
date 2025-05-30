import { createLogger, Logger, ConfigParameters } from './logger';

describe('Logger', () => {
  const mockValueFromMethod = jest.fn((arg: string) => `Mocked ${arg}`);
  const configParams: ConfigParameters = {
    parameters: {
      param1: {
        valueFromMethod: mockValueFromMethod,
        fallback: 'FallbackValue',
      },
    },
  };

  it('creates a logger with default configuration', () => {
    const logger: Logger = createLogger({});

    expect(logger).toBeDefined();
  });

  it('creates a logger with custom log level and service', () => {
    const logger: Logger = createLogger({
      logLevel: 'debug',
      service: 'TestService',
    });

    expect(logger).toBeDefined();
  });

  it('creates a logger with configuration parameters', () => {
    const logger: Logger = createLogger({ config: configParams });

    expect(logger).toBeDefined();
  });

  it('logs messages with configuration parameters', () => {
    const logger: Logger = createLogger({ config: configParams });
    const logSpy = jest.spyOn(logger, 'info');

    logger.info('Log message');

    expect(logSpy).toHaveBeenCalledWith('Log message');

    logSpy.mockRestore();
  });
});

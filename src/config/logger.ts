import winston from 'winston';
// import { Config } from '.';

const logger = winston.createLogger({
  level: 'info',
  defaultMeta: { servicename: 'auth-service' },
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: 'info.log',
      dirname: 'logs',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      // silent: Config.NODE_ENV === 'development',
    }),
    new winston.transports.File({
      level: 'error',
      filename: 'error.log',
      dirname: 'logs',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
    }),
  ],
});

export default logger;

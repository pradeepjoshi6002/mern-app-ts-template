import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
  const PORT = Config.PORT;
  try {
    app.listen(PORT, () => {
      logger.info('server listening on port', { port: PORT });
    });
  } catch (err) {
    logger.info('error message: ', { err });
  }
};

startServer();

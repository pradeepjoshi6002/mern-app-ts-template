import express, { NextFunction, Request, Response } from 'express';
import logger from './config/logger';
import createHttpError, { HttpError } from 'http-errors';

const app = express();

app.get('/', (req, res, next) => {
  const error = createHttpError(401, 'you cant access this route');
  next(error);
});

app.get('/main', (req, res) => {
  res.json({ message: 'welcome to auth servcice' });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.info(err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        message: err.message,
        path: '',
        location: '',
      },
    ],
  });
});
export default app;

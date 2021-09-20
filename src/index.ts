import { text } from 'body-parser';
import * as express from 'express';
import { formatRouter } from './router/format.router';
import { errorHandler } from './utils/error-handler';

const app = express();

app.use(text({ type: '*/*' }));
app.use(formatRouter);
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Application is listening on port 3000');
});

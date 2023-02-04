import express from 'express';
import routes from './routes/index';
import logger from './utils/logger';

const app = express();
const port = 3000;

app.all('*', logger);
app.use('/api', routes);

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}/api`);
});

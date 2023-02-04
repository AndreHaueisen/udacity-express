import express from 'express';
const app = express();
const port = 3000;

app.get('/api', function (_, res) {
  res.send('Hello World!');
});

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}/api`);
});

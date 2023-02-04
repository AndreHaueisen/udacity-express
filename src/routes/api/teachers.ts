import express from 'express';

const teachers = express.Router();

teachers.get('/', (_, res) => {
  res.send('Teachers route');
});

teachers.get('/1', (_, res) => {
  res.send('Here is the first teacher');
});

export default teachers;

import express from 'express';

const teachers = express.Router();

teachers.get('/', (_, res) => {
  res.send('Teachers route');
});

export default teachers;
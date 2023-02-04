import express from 'express';

const students = express.Router();

students.get('/', (_, res) => {
  res.send('Students route');
});

export default students;
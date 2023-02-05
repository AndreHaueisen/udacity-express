import express from 'express';
import teachers from './api/teachers';
import students from './api/students';
import users from './api/users';

const routes = express.Router();

routes.get('/', (_, res) => {
  res.send('main api route');
});

routes.use('/teachers', teachers);
routes.use('/students', students);
routes.use('/users', users);

export default routes;

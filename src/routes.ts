import express from 'express';
import ClassesController from './controllers/classes.controller';
import ConnectionController from './controllers/connections.controller';


const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);
routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);


export default routes;
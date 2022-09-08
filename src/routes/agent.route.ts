import express from 'express';
import { agentController } from '../controllers/agent.controller';

const agentRoute = express.Router();

agentRoute.post('/ask', agentController.ask);

agentRoute.post('/build', agentController.buildAgent);

export { agentRoute };

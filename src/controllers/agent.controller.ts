import { NextFunction, Request, Response } from 'express';
import globals from '../bot/libs/globals';

const buildAgent = async (req: Request, res: Response, next: NextFunction) => {
  if (globals.AgentInstance().isAgentBuilding) {
    return res.status(403).end('Agent are building');
  }
  try {
    const fullBuild = true;
    await globals.AgentInstance().buildAgent(fullBuild);
    res.end('done');
  } catch (error) {
    console.error(error);
    res.status(500).end('Erro on build agent');
  }
};

const ask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await globals.AgentInstance().response(req.body.say, req.body.uID);
    res.json(resp);
  } catch (error) {
    console.log(error);
    
    res.end('Ops, internal error X(');
  }
};

const agentController = { buildAgent, ask };

export { agentController }

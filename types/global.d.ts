import 'express'; // Modifies global namespace, so include it!

interface Agent {
  buildAgent(fullBuild: boolean): Promise<unknown>;
  on(eventName: string | symbol, listener: (...args: any[]) => void): Agent;
}

declare global {
  var AgentInstance: Agent;
  var appRoot: string;

  // namespace Express {
  //   interface Request {
  //     token: string;
  //     UserID: string;
  //   }
  // }
}

export {};

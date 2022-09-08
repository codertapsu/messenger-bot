const globals = {
  AgentInstance: () => (global as any).AgentInstance ?? null,
  RootPath: () => (global as any).appRoot ?? process.cwd(),
};

export default globals;

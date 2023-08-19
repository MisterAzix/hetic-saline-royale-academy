export const raiseError = (error: string): never => {
  throw new Error(error);
};

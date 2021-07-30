declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
    module: {
      id: string;
    };
    lesson: {
      id: string;
    }
  }
}

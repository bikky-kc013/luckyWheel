import { Request, Response, NextFunction } from 'express';

export const notFound = (req: Request, res: Response, next: NextFunction): void => {
  res.status(404).json({
    message: "This route is not defined",
  });
};

export const errorHandler = async (err: any, req: Request, res: Response, next: NextFunction): Promise<void> => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  //!This will check if the error has a 'errors' property and it's an array as the errors from the zod validators have the errors 
  if (err.errors && Array.isArray(err.errors)) {
    const formattedErrors = err.errors.map((error: any) => ({
      field: error.path[0],
      message: error.message,
    }));
    res.status(400).json({ success: false, errors: formattedErrors });
  } else {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
};

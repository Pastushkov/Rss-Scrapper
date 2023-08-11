import { Request, Response, NextFunction } from "express";

import Joi from "joi";

const check = (schemas: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    let stop = false;
    Object.keys(schemas).forEach((key) => {
      if (!stop) {
        if (
          ["params", "query", "body", "files"].indexOf(key) > -1 &&
          Joi.isSchema(schemas[key])
        ) {
          const result = schemas[key].validate((req as any)[key]);
          if (result.error) {
            res.status(400).json({
              status: false,
              message: `${key} validation failed`,
              error: result.error.details[0].message,
            });
            stop = true;
          }
        } else {
          console.info("Invalid Joi schema", key, schemas[key]);
        }
      }
    });

    if (!stop) {
      next();
    }
  };
};

export default check;

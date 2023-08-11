import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken'
import config from "../config/config";
import { IAuthRequest } from "../config/interfaces";

const authMiddleware = (req: IAuthRequest, res: Response, next: NextFunction) => {
    if (req.method === "OPTIONS") return next();
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, config.jwtSecret, (err: any, user: any) => {
            if (err)
                return res.status(403).json({
                    status: false,
                    payload: null,
                    error: "You don't have access for this",

                });
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json({
            status: false,
            payload: null,
            error: "Authorization required",

        });
    }
}


export default authMiddleware
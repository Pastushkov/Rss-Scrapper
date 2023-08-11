import { Request, Response } from "express";
import User from '../models/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from "../config/config";

const generateAccessToken = (payload: any) => {
    return jwt.sign(payload, config.jwtSecret, { expiresIn: "24h" });
};

const register = async (req: Request, res: Response) => {
    const { email, password, name } = req.body
    let exist;
    try {
        exist = await User.findOne({ email })
    } catch (e: any) {
        return res.status(500).json({
            status: false,
            payload: null,
            error: e.toString(),
        });
    }
    if (exist) {
        return res.status(500).json({
            status: false,
            payload: null,
            error: 'User with this email already exist',
        });
    }

    let response;
    try {
        response = await User.create({
            name,
            email,
            password: await bcrypt.hash(password, 10),
        })
    } catch (e: any) {
        return res.status(500).json({
            status: false,
            payload: null,
            error: e.toString(),
        });
    }

    return res.status(201).json({
        status: true,
        payload: {
            success: true
        },
        error: null
    })
}

const login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    let user;
    try {
        user = await User.findOne({ email })
    } catch (e: any) {
        return res.status(500).json({
            status: false,
            payload: null,
            error: e.toString(),
        });
    }
    if (!user) {
        return res.status(404).json({
            status: false,
            payload: null,
            error: 'Email or password incorrect',
        });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(404).json({
            status: false,
            payload: null,
            error: 'Email or password incorrect',
        });
    }

    const token = generateAccessToken({
        _id: user._id
    })

    return res.status(200).json({
        status: true,
        payload: token,
        error: null
    })
}

export default {
    register,
    login
}
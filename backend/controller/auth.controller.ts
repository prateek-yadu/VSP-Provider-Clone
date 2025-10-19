import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from "express";
import send from "../utils/response/index.js";
import { pool } from '../db/config.js';

export const Login = async (req: Request, res: Response) => {
    try {
        // check the password
        // genrate tokem if password matches
    } catch (error) {
        send.internalError(res);
    }
    res.send("Login Route");
}

export const Register = async (req: Request, res: Response) => {
    const { name, email, phone, password } = req.body;
    const saltRounds: number = typeof (process.env.SALTROUNDS) == "string" && parseInt(process.env.SALTROUNDS) || 10;// adds salt rounds

    try {
        // checks if user exists 
        const [exists, fields]: any = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

        if (exists.length != 0) {
            // return duplicate user error
            send.conflict(res, "User Already Exists");
        } else {
            const userId = uuidv4(); // genrates uniqe user ID
            const hash = bcrypt.hashSync(password, saltRounds); // genrates hashed password

            // creates user
            const sql = 'INSERT INTO users (id, name, email, phone, password, image_url) VALUES (?, ?, ?, ?, ?, ?)';
            const values = [userId, name, email, phone, hash, 'none'];
            const [result, fields] = await pool.execute(sql, values);

            send.created(res, "User Created Successfuly");
        }
    } catch (error) {
        send.internalError(res);
    }
}
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectRoute = async ( req, res, next) => {
    try {
        const token = req.cookies.jwt
        if(!token) {
            return res.status(401).json({ message: "Unauthorized, please login" });

        }
        
        
    } catch (error) {
        console.erroe(`Error in protectRoute middleware: ${error}`)
        return res.status(500).json({ message: "Internal server error" });
    }
}
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import User from "../Models/UserModel.js";

const protect = asyncHandler(
    async (req, res, next) => {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            try {
                // splits authorization headers into substrings "Bearer" and "<token>"
                token = req.headers.authorization.split(" ")[1];

                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                
                // finds user data but omits the password data
                req.user = await User.findById(decoded.id).select("-password");
                next();

            } catch (error) {
                console.error(error);
                res.status(401);
                throw new Error("Not authorized, no token");
            }
        }

});

export default protect;

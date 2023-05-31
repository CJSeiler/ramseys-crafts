import express from "express";
import asyncHandler from "express-async-handler";
import axios from "axios";

const contactRouter = express.Router();

// RECAPTCHA TOKEN VERIFICATION
contactRouter.post("/verify-token", asyncHandler( async(req, res) => {
    try {
        const { token } = req.body;

        // sends secrect key and token to google api
        const response = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_SECRET_KEY}&response=${token}`
        );

        return res.status(200).json({
            success: true,
            message: "Token successfully verified",
            data: response.data
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error verifying token"
        });
    }
}));

export default contactRouter;

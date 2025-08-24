import jwt from "jsonwebtoken"
import { AsyncHandler } from "../utils/AsyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import User from "../models/User.model.js";
import mongoose from "mongoose";

export const verifyJWT = AsyncHandler(async(req,res,next)=>{
    const token = req.header("auth-token");

    

    if(!token){
        throw new ApiError(400,"No Token Sent")
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    if(!mongoose.Types.ObjectId.isValid(decoded._id)){
        throw new ApiError(400,"Invalid ID")
    }


    const existingUser = await User.findById(decoded._id);

    if(!existingUser){
        throw new ApiError(400,"Invalid Token")
    }

 
    req.user = existingUser;


    next();
})

export const verifyAdmin = AsyncHandler(async(req,res,next)=>{

    if(!req.user.isAdmin){
        throw new ApiError(403,"Forbidden Access")
    }

    next()
})
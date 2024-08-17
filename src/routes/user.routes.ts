import { NextFunction, Request, Response, Router } from "express";

// import utils
import asyncHandler from "../utils/AsyncWrapper";

// controllers
import {
    healthCheckup,
    handleWebhook,
    getToken
} from "../controllers/users";

// middleware
import verifySignature from "../middleware/appwrite/verifySignature";

const userRoute = Router()

userRoute.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "User routes are working" })
})

userRoute.route('/webhook').post(verifySignature, asyncHandler(handleWebhook))
userRoute.route('/token').post(asyncHandler(getToken))

userRoute.route('/test').get(asyncHandler(healthCheckup))

export default userRoute;
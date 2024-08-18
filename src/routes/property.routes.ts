import { Request, Response, Router } from "express";
import asyncHandler from "../utils/AsyncWrapper";

import { handleImages, handleList } from "../controllers/properties/properties";

const propertyRouter = Router()

propertyRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "Properties routes are working" })
})

propertyRouter.route('/list').post(asyncHandler(handleList))
propertyRouter.route('/update-image').patch(asyncHandler(handleImages))


export default propertyRouter;
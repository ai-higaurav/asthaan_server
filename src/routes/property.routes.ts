import { Request, Response, Router } from "express";
import asyncHandler from "../utils/AsyncWrapper";

import { handleImages, handleList, handlePropertyList, handleUpdateProperty } from "../controllers/properties/properties";

const propertyRouter = Router()

propertyRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "Properties routes are working" })
})

propertyRouter.route('/list').post(asyncHandler(handleList))
propertyRouter.route('/update-image').patch(asyncHandler(handleImages))
propertyRouter.route('/getlist').get(asyncHandler(handlePropertyList))
propertyRouter.route('/update-property').patch(asyncHandler(handleUpdateProperty))

export default propertyRouter;
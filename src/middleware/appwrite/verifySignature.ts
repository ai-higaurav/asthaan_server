import { NextFunction, Request, Response } from "express";
import ApiResponse from "../../utils/ApiResponse";
import crypto from 'crypto'

const verifySignature = async (req: Request, res: Response, next: NextFunction) => {
    const webhookSigKey = process.env.WEBHOOK_SECRECT_KEY

    if (!webhookSigKey) {
        console.error("Webhook key is missing")
        return ApiResponse.failure([], "Webhook key missing", 400).send(res)
    }
    const baseUrl = process.env.BASE_URL as string;
    const endpoint = '/api/v1/users/webhook';
    const token = crypto.createHmac('sha1', webhookSigKey)
        .update(`${baseUrl}${endpoint}${JSON.stringify(req.body)}`)
        .digest().toString('base64');

    if (token !== req.headers['x-appwrite-webhook-signature']) {
        console.warn('Unauthorized Access: Invalid webhook signature');
        return ApiResponse.failure([], 'Unauthorized Access', 400).send(res);
    }
    next()

}

export default verifySignature;
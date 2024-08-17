import { Response } from "express";

class ApiResponse {

    public data: any[];
    public message: string;
    public statusCode: number;
  
    constructor(data: any[] = [], message: string = '', statusCode: number){

    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
    
    }

    static success (data: any[] = [], message: string = '', statusCode: number = 200){
        return new ApiResponse(data, message, statusCode)
    }

    static failure (data: any[] = [], message: string = '', statusCode: number = 400){
        return new ApiResponse(data, message, statusCode)
    }

    send(res:Response){
        return res.status(this.statusCode).json(this)
    }
}

export default ApiResponse;
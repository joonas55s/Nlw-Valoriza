import express, { NextFunction,Request,Response } from 'express';
import "express-async-errors";
import 'reflect-metadata';
import {router} from './routes';
import {CheckErrors} from './middleware/CheckErrors';
import './database';

const app = express();

app.use(express.json());
app.use(router);
app.use(CheckErrors);
// app.use((err:Error,request:Request,response:Response,next:NextFunction)=>{

//     if(err instanceof Error){
//         return response.status(400).json({message:err.message});
//     }

//     return response.status(500).json({
//         status:"error",
//         message:"Internal server error"

//     });
// });
app.listen(3000,()=>{
    console.log("Successful Starter Server!");
});
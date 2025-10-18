// import { Response } from "express";

const send = {
    sucess(data?: any){
        return {
            status: 200,
            message: "Created",
            ...(data && {data})
        }
    }
}


console.log(send.sucess())


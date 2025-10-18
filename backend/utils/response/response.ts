import { Response } from "express"
const send = {
    /*
        ##----SUCCESS----##
    */
    ok(res: Response, message?: string, data?: any) {
        return res.status(200).json({
            message: message ? message : "OK",
            ...(data && { data })
        })
    },
    created(res: Response, message?: string, data?: any) {
        return res.status(201).json({
            message: message ? message : "Created",
            ...(data && { data })
        })
    },

    /*
       ##----CLIENT SIDE ERROR----##
   */
    badRequest(res: Response, message?: string, data?: any) {
        return res.status(400).json({
            message: message ? message : "Bad Request",
            ...(data && { data })
        })
    },
    unauthorized(res: Response, message?: string, data?: any) {
        return res.status(401).json({
            message: message ? message : "Unauthorized",
            ...(data && { data })
        })
    },
    forbidden(res: Response, message?: string, data?: any) {
        return res.status(403).json({
            message: message ? message : "Forbidden",
            ...(data && { data })
        })
    },
    notFound(res: Response, message?: string, data?: any) {
        return res.status(404).json({
            message: message ? message : "Not Found",
            ...(data && { data })
        })
    },

    /*
       ##----SERVER SIDE ERROR----##
   */
    internalError(res: Response, message?: string, data?: any) {
        return res.status(500).json({
            message: message ? message : "Internal Server Error",
            ...(data && { data })
        })
    },
}



export default send
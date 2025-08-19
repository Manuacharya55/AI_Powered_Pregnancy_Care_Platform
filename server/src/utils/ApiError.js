
export class ApiError extends Error{
    constructor(statusCode,message,errors){
        super(message)
        this.success = false
        this.statusCode = statusCode
        this.message = message
        this.data = []
        this.errors = errors
        Error.captureStackTrace(this,this.constructor)
    }
}
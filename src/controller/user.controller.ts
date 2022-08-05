import { Request, Response } from "express"
import { omit } from "lodash"
import { CreateUserInput } from "../schema/user.schema"
import { createUser } from "../service/user.service"
import logger from "../utils/logger"



export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>, 
    res:Response
    ){
    try {
        logger.info("handler", "user call reached");
        const user = await createUser(req.body) //call create user
        logger.info("handler", "user call reached after call");
        return res.send(user);
    } catch(e: any){
        logger.error(e)
        return res.status(409).send(e.message) //user already exist
    }
}

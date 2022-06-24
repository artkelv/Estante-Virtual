import {Response, Request} from "express"
import { NewResultBuss } from "../business/NewResultBuss"
import { newResultDTO } from "../dto/newResult"
import { CustomError } from "../error/CustomError"

export class NewResultCont {
    constructor(private newResultBusiness:NewResultBuss) {}
    async newResult (
        req:Request,
        res:Response
    ) {
        try {
            const {competition_name, athlete, value, unity} = req.body
            const result:newResultDTO = {
                competition_name,
                athlete,
                value,
                unity
            }
            const newResultBuss = await this.newResultBusiness.newResult(result)
            res.status(201).send(newResultBuss)
        } catch (error:any) {
            if(error instanceof CustomError){
                res.status(error.statusCode).send({message:error.message})
            }else if(error){
                res.status(400).send(error.message)
            } else{
                res.status(500).send("Erro interno no servidor")
            }
        }
    }
}
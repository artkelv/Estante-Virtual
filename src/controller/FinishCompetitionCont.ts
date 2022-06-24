import {Request, Response} from "express"
import { FinishCompetitionBuss } from "../business/FinishCompetitionBuss"
import { FCompetDTO } from "../dto/finishCompt"
import { CustomError } from "../error/CustomError"

export class FinishCompetitionCont {
    constructor(private finishComptBuss:FinishCompetitionBuss) {}
    async finishCompetition(
        req:Request,
        res:Response
    ) {
        try {
            const {competicao, status} = req.body
            const dataFinishCompt:FCompetDTO = {
                competicao,
                status
            } 
            const finishCompetitionBuss = await this.finishComptBuss.finishCompetition(dataFinishCompt)
            
            res.status(200).send(finishCompetitionBuss)
        } catch (error:any) {
            if(error instanceof CustomError){
                res.status(error.statusCode).send({message:error.message})
            }else if(error){
                res.status(400).send(error.message)
            }else{
                res.status(500).send("Erro interno no servidor")
            }
        }
    }
}
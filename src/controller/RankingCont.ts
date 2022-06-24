import {Request, Response} from "express"
import { RankingBuss } from "../business/RankingBuss";
import { CustomError } from "../error/CustomError";

export class RankingCont {
    constructor(private rankingBuss:RankingBuss) {
    }
    async returnRanking(
        req:Request,
        res:Response
    ){
        try {
            const nameOfCompetition = req.params.nameOfCompetition
            const result = await this.rankingBuss.returnRanking(nameOfCompetition)
            res.status(200).send(result)
        } catch (error:any) {
            if(error instanceof CustomError){
                res.status(error.statusCode).send({messag:error.message})
            }else if(error){
                res.status(400).send(error.message)
            }else{
                res.status(500).send("Erro interno no servidor")
            }
        }
    }
}
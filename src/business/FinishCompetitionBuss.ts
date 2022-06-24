import { FinishCompetitionData } from "../data/FinishCompetitionData";
import { VerifyStatusCompetition } from "../data/VerifyStatusCompt";
import { FCompetDTO } from "../dto/finishCompt";
import { CustomError } from "../error/CustomError";

export class FinishCompetitionBuss {
    constructor(
        private FinishCompetData:FinishCompetitionData,
        private verifyStatusCompetition:VerifyStatusCompetition
    ) {}
    async finishCompetition(input:FCompetDTO) {
        const {competicao, status} = input
        if(!competicao || !status){
            throw new CustomError(400,"Os dados não foram preenchidos corretamente.");
        }
        const verifyStatusCompetition = await this.verifyStatusCompetition.verifyStatus(competicao)
        if(verifyStatusCompetition[0].status === "closed" || verifyStatusCompetition[0].status === "Closed"){
            throw new CustomError(401, "A competição ja encontra-se finalizada.");
        }
        

        await this.FinishCompetData.finishCompetition(competicao, status)
       
        return {message:"A competição foi finalizada."}
    }
}
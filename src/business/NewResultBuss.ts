import { NewResultData } from "../data/NewResultData";
import { VerifyStatusCompetition } from "../data/VerifyStatusCompt";
import { newResultDTO } from "../dto/newResult";
import { CustomError } from "../error/CustomError";
import { NewResult } from "../model/newResult";
import { GeneratedId } from "../services/GeneratedId"

export class NewResultBuss {
    constructor(
        private newResultData:NewResultData,
        private generatedId:GeneratedId,
        private verifyStatusCompetition:VerifyStatusCompetition
    )
    {}
    async newResult(input:newResultDTO) {
        const {competition_name, athlete, value, unity} = input

        if(!competition_name || !athlete || !value || !unity){
          throw new CustomError(404, "Os campos não foram preenchidos corretamente");
        }
        const id = this.generatedId.newId()

        const result:NewResult = {
            id,
            competition_name,
            athlete,
            value,
            unity
        }
        
        if(competition_name !== "100m rasos" && competition_name !== "Lançamento de Dardo"){
            throw new CustomError(400,"Nesta aplicação você só poderá cadastrar resultados das competições: '100m rasos' e 'Lançamento de dardos'");
        }
        if(competition_name === "100m rasos"){
            const statusOfCompetition100m = await this.verifyStatusCompetition.verifyStatus(competition_name)
            if(statusOfCompetition100m[0].status === "closed" || statusOfCompetition100m[0].status === "Closed"){
                throw new CustomError(401, "Não foi possível cadastrar o resultado, pois a competição encontra-se encerrada.");
            }
            await this.newResultData.newResultData100M(result)  
        }
        if(competition_name === "Lançamento de Dardo"){
            const statusOfCompetitionJThrow = await this.verifyStatusCompetition.verifyStatus(competition_name)
            if(statusOfCompetitionJThrow[0].status === "closed" || statusOfCompetitionJThrow[0].status === "Closed"){
                throw new CustomError(401, "Não foi possível cadastrar o resultado, pois a competição encontra-se encerrada.");
            }
            await this.newResultData.newResultDataJavelinThrow(result)
        }
        
        return {message: "Resultado cadastrado com sucesso!"}
    }
}
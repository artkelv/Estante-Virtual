import { CreateComptData } from "../data/CreateComptData";
import { CreateComptDTO, Status } from "../dto/createCompt";
import { CustomError } from "../error/CustomError";
import { CreateCompt } from "../model/createCompt";
import { GeneratedId } from "../services/GeneratedId";

export class CreateComptBuss {
    constructor(
        private generatedId:GeneratedId,
        private createComptData:CreateComptData) {}

    async createCompetition(input:CreateComptDTO){
        const {nameOfCompetition, status} = input

        if(!nameOfCompetition || !status){
            throw new CustomError(204, "Os campos não foram preenchidos corretamente.")
        } else if(status !== "open"){
            throw new CustomError(400, "O campo de 'status' não pode ser diferente de 'open' ao criar uma competição.")
        }
        
        const competition:CreateCompt = {
            nameOfCompetition,
            status
        }
        await this.createComptData.createCompt(competition)
        return "Competição criada com sucesso!"
    }
}
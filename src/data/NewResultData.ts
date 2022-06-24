import { newResultDTO } from "../dto/newResult";
import { CustomError } from "../error/CustomError";
import { BaseDataBase } from "./BaseDataBase";

export class NewResultData extends BaseDataBase {
    private TABLEDART = "ResultJavelinThrow"
    private TABLE100M = "Result100M"

    async newResultData100M(input:newResultDTO) {
        try {
            await this.connection()
                .insert(input)
                .into(this.TABLE100M)
        } catch (error:any) {
            throw new CustomError(400, error.message)
        }
    }
    async newResultDataJavelinThrow(input:newResultDTO){
        try {
            await this.connection()
                .insert(input)
                .into(this.TABLEDART)
        } catch (error:any) {
            throw new CustomError(400, error.message)
        }
    }
}
import { CustomError } from "../error/CustomError";
import { CreateCompt } from "../model/createCompt";
import { BaseDataBase } from "./BaseDataBase";

export class CreateComptData extends BaseDataBase {
    private TABLE_NAME = "Competition"

    async createCompt(input:CreateCompt){
        try {
        const result = await this.connection()
            .insert(input)
            .into(this.TABLE_NAME)
        return result
        } catch (error:any) {
            throw new CustomError(400, error.message)
        }
    }
}
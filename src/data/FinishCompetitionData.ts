import { FCompetDTO } from "../dto/finishCompt";
import { CustomError } from "../error/CustomError";
import { BaseDataBase } from "./BaseDataBase";

export class FinishCompetitionData extends BaseDataBase{
    private TABLE_NAME = "Competition"
    async finishCompetition(competition:string, status:string) {
        try {
            await this.connection.raw(`
                UPDATE ${this.TABLE_NAME} SET status = "${status}" WHERE nameOfCompetition = "${competition}";
            `)
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    }
}

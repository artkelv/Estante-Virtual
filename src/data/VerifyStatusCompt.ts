import { CustomError } from "../error/CustomError";
import { BaseDataBase } from "./BaseDataBase";

export class VerifyStatusCompetition extends BaseDataBase{
    private COMPETITION = "Competition"
    async verifyStatus(nameOfCompetition:string) {
        try {
            const result = await this.connection()
                .select("status")
                .from(this.COMPETITION)
                .where("nameOfCompetition", "=", nameOfCompetition)
            return result  
        } catch (error:any) {
            throw new CustomError(400, error.message);
        }
    }
}
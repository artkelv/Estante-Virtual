import { BaseDataBase } from "./BaseDataBase"

export class RankingData extends BaseDataBase{
    private TABLENAME100M = "Result100M"
    private TABLENAMEJTHROW = "ResultJavelinThrow"
    
    async returnRanking100M(nameOfCompetition:string){
        const result = await this.connection(this.TABLENAME100M)
            .select("athlete", "value")
            .orderBy("value", "asc")
        return result
    }
    async returnRankingJavelinThrow(nameOfCompetition:string){
        const result = await this.connection()
            .select("athlete", "value")
            .from(this.TABLENAMEJTHROW)
            .orderBy("value", "desc")
        return result    
    }
}
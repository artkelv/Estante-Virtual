import { RankingData } from "../data/RankingData";
import { VerifyStatusCompetition } from "../data/VerifyStatusCompt";
import { CustomError } from "../error/CustomError";

export class RankingBuss {
    constructor(
        private rankingData:RankingData,
        private verifyStatusCompetition:VerifyStatusCompetition
    ) {}
    async returnRanking(nameCompetition:string){
        
        if(!nameCompetition){
            throw new CustomError(400, "Os campos não foram preenchidos corretamente");
        }

        if(nameCompetition === "100m rasos"){
            const result = await this.rankingData.returnRanking100M(nameCompetition)
            const statusCompt = await this.verifyStatusCompetition.verifyStatus(nameCompetition)
            
            let i = 1
            const returnPosition = result.map((item) => {
                const rankingWithPosition = {
                    position:i++,
                    athlete:item.athlete,
                    value:item.value
                }
                return rankingWithPosition
            }) 
            const rankingWithStatus = [statusCompt, returnPosition]
            return rankingWithStatus.flat(2)
        }
        if(nameCompetition === "Lançamento de Dardo"){
            const result = await this.rankingData.returnRankingJavelinThrow(nameCompetition)
            const statusCompt = await this.verifyStatusCompetition.verifyStatus(nameCompetition)

            let i = 1
            const returnPosition = result.map((item) => {
                const rankingWithPosition = {
                    position:i++,
                    athlete:item.athlete,
                    value:item.value
                }
                return rankingWithPosition
            })
            const rankingWithStatus = [statusCompt, returnPosition] 
            return rankingWithStatus.flat(2)
        }
    }
}
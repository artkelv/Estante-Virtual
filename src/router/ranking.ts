import { RankingBuss } from "../business/RankingBuss";
import { RankingData } from "../data/RankingData";
import express from "express"
import { RankingCont } from "../controller/RankingCont";
import { VerifyStatusCompetition } from "../data/VerifyStatusCompt";

const verifyStatusCompetition = new VerifyStatusCompetition()
const rankingData = new RankingData()
const rankingBuss = new RankingBuss(
    rankingData,
    verifyStatusCompetition
)

export const rankingRouter = express.Router()
const rankingCont = new RankingCont(rankingBuss)

rankingRouter.get("/:nameOfCompetition", (req, res) => {
    rankingCont.returnRanking(req, res)
})

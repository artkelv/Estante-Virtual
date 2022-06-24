import { CreateComptBuss } from "../business/CreateComptBuss";
import { CreateComptCont } from "../controller/CreateComptCont";
import { CreateComptData } from "../data/CreateComptData";
import { GeneratedId } from "../services/GeneratedId";
import express from "express"

const generatedId = new GeneratedId()
const createComptData = new CreateComptData()
const createComptBuss = new CreateComptBuss(
    generatedId,
    createComptData
);

export const createComptRouter = express.Router()
const createComptCont = new CreateComptCont(createComptBuss) 

createComptRouter.post("/competition", (req, res) => {
    createComptCont.createComptCont(req, res)
})

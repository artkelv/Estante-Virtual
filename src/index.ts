import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { createComptRouter } from "./router/createCompt";
import { newResultRouter } from "./router/newResult";
import { finishComptRouter } from "./router/finishCompt";
import { rankingRouter } from "./router/ranking";
//express & CORS
const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/create", createComptRouter)
app.use("/new", newResultRouter)
app.use("/finish", finishComptRouter)
app.use("/ranking", rankingRouter)

export async function getHome(req: Request, res: Response): Promise<void>{
  res.status(200).send("ok funcionando")
}
app.get("/", getHome);

//Server config
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

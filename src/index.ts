import express from "express";

class App {
    public application : express.Application;
    constructor () {
        this.application = express();
    }
}

const app = new App().application;
app.get("/", (req: express.Request, res: express.Response)=>{
    res.send("start");
})

app.listen(4000, ()=>{console.log('finally >.<')});
//ts-node 못찾고 끝
import express, { Request, Response } from "express";

class Server {
    private app: express.Application;

    constructor(){
        this.app = express();
        this.router();
    }

    private router() {
        this.app.get('/', (req: Request, res: Response)=>{
            res.json({hello: 'world'})
        })
    }
    public getInstance () {
        return this.app;
    }
}

export default Server
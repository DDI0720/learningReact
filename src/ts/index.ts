import express, { Request, Response } from "express";

class Server {
    private app: express.Application;

    constructor(){
        this.app = express();
        this.router();
    }

    private router() {
        this.app.use(express.static('./'));
        this.app.get('/', (req: Request, res: Response)=>{
            res.sendFile('index.html', {root: './src/html'});
        })
    }
    public getInstance () {
        return this.app;
    }
}

export default Server
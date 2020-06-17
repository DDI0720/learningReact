import express from "express";
import Server from "./src/ts/index";

const server = new Server();
const app: express.Application = server.getInstance();

app.listen(8080, ()=>{
    console.log('http://localhost:8080');
})
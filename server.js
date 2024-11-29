import express from "express";
import 'dotenv/config';
import './config/database.js';

const server = express();
const PORT = process.env.PORT || 8080;


server.get("/", (req, res) => {
    res.send("Hello World!");
});

server.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})
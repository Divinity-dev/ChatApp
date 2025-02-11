import express from 'express'
import cors from "cors"
import dotenv from 'dotenv'

const app = express()

app.use(cors());
app.use(express.json());
dotenv.config();

app.listen(5000, ()=>{
    console.log("Listening on port 5000")
})

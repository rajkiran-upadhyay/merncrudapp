import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/route.js';//default import no {} and any name
import cors from 'cors';
import bodyParser from 'body-parser';
const app= express();// initialize 
dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());//to communicate betn frontend and backend server
app.use('/',Routes);//goes to web api async call
// const PORT= 8000;
const PORT= process.env.PORT|| 8000;
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);//goes to web api async call
app.listen(PORT,()=>console.log(`server is running at ${PORT}`)); //listen function of express module is used to create 
//a server
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connecting from './config/db.js';
import route from './routes/formsRoute.js';

const app=express();


const PORT=8000;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({extended: true}))
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
// app.use(cors({ credentials: true, origin: 'https://landingpage77.netlify.app/' }));
app.listen(PORT,()=>{console.log("server is on :" + PORT)});

connecting();


app.use('/api', route)






















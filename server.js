import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import "./Globals";
import connectedDb from './Globals/sequelize'
import events from 'events';
const event = new events.EventEmitter();

dotenv.config()
 global.app = express();
global.server = http.createServer(app);
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use((req,res,next)=>{
    console.log(req.headers,"body-------",req.query);
    next();
})
console.log(process.env.DATABASE_NAME)

import routes from'./Routes/index';

app.use('/v1',routes)
console.log(sequelize)
app.listen(5557,()=>{
    
    console.log("Server listening on port 3000")
    event.on('dbConnection', function (data) {
        connectedDb()
    });
    event.emit('dbConnection', 'database connection');
})

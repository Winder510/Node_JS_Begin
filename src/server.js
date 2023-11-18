// Check dev branch
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web'
import connection from './configs/connectDB'
import initAPIRoute from './route/api'
require('dotenv').config()


const app = express();
const port = process.env.PORT || 8080;

// config to post res 
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
//setup view engine 
configViewEngine(app);

// init web route
initWebRoute(app);

// init api route 
initAPIRoute(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
import express from 'express'
import homeController from '../controller/homeController'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', (req, res) => {
        res.send(`<h1>Im Phong</h1>`);
    })
    return app.use('/', router)

}
module.exports = initWebRoute;
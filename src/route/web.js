import express from 'express'
import homeController from '../controller/homeController'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get(`/detail/user/:userId`, homeController.getDetailPage);
    router.post('/creat-new-user', homeController.creatNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:id', homeController.getEditPage);
    router.post('/update-user', homeController.postUpdateUser);
    router.get('/about', (req, res) => {
        res.send(`<h1>Im Phong</h1>`);
    })
    return app.use('/', router)
}
module.exports = initWebRoute;
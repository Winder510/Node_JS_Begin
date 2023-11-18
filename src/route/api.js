import express from 'express'
import APIController from '../controller/APIController'
let router = express.Router();

const initAPIRoute = (app) => {
    router.get('/users', APIController.getALLUser);
    router.post('/creat-user', APIController.creatNewUser);
    router.put('/update-user', APIController.updateUser);
    router.delete('/delete-user/:id', APIController.deleteUser);
    return app.use('/api/v1', router);
}
module.exports = initAPIRoute; 
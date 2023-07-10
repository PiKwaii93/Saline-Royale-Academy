import express from 'express';
import { testDatabase } from '../controllers/testDatabaseController.js';
import { login, register } from '../controllers/userController.js';

const router = express.Router();

router.get('/meow', function(req, res){
    res.send('meow');
});

router.get('/test', function(req, res){
    res.send('test');
});

router.get('/database', testDatabase);

router.post('/user/login', login)

router.post('/user/register', register)

//export this router to use in our index.js
export default router
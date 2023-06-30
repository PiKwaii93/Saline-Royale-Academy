import express from 'express';
import { testDatabase } from '../controllers/testDatabaseController.js';

const router = express.Router();

router.get('/meow', function(req, res){
    res.send('meow');
});

router.get('/test', function(req, res){
    res.send('test');
});

router.get('/database', testDatabase);

//export this router to use in our index.js
export default router
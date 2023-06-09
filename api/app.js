import express from 'express';
import cors from 'cors';
/* import { testDatabase } from './controllers/testDatabaseController'; */
import pool from '../config/db.js';

const app = express();

const port = process.env.PORT || 4000;


// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


var router = express.Router();


router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.get("/test", (req, res) => {
  res.send({ express: 'Renvois le test' });
});
/* 
router.get("/database", testDatabase); */

router.get("/database", (req, res) => {
  res.send({ express: 'Renvois la DATABASE' });
});

app.use('/foo', router)

app.listen(3000);

/* var corsOptions = {
  credentials: true,
  origin: `http://localhost:${port}`
};
app.use(cors()); */
app.use(express.json());

/* const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions)); */





app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);

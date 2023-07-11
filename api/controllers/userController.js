import pool from '../config/db.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto'

const jwtKey = "saline_secret_key"
const jwtExpirySeconds = 300



export function login(req, res) {
  const { email, password } = req.body;
  if (email && password) {
    try {
      console.log(email, password)
      pool
        .query(
          `SELECT id, firstName, lastName FROM users WHERE email='${email}' AND password='${password}' LIMIT 1`
        )
        .then((response) => {
          if (response.length > 0) {
            const token = jwt.sign(
              { id: response[0].id }, jwtKey, {
                algorithm: "HS256",
                expiresIn: jwtExpirySeconds,
              }
            );
            console.log("token : " + token)
            res.cookie('access_token', token);
            res.status(202).json({
              status: 'Success',
              user: {
                lastName: response[0].lastName,
                firstName: response[0].firstName,
              },
              token: token,
            });
          } else {
            res.status(404).json({
              status: 'Failed',
              message: 'User not found',
            });
          }
        });
    } catch (e) {
      res.status(400).json({
        status: 'Failed',
        message: 'Request failed on SELECT',
      });
    }
  } else {
    res.status(406).json({
      status: 'Failed login',
      message: 'Inputs missing',
    });
  }
}

export function register(req, res) {
  const { lastName, firstName, email, password, passwordConfirm } = req.body;

  if (email && firstName && lastName && password && passwordConfirm) {
    if (password == passwordConfirm) {
      try {
        pool
          .query(`INSERT INTO users(email, lastname, firstname, password) VALUES('${email}', '${lastName}', '${firstName}', '${password}')`)
      }
      catch (e){
        res.status(400).json({
          status: 'Failed',
          message: 'Request failed on INSERT',
        });
      }
      login(req, res)
    } else {
      res.status(400).json({
        status: 'Failed',
        message: 'Passwords not matching',
      });
    }
  } else {
    res.status(406).json({
      status: 'Failed register',
      message: 'Inputs missing',
    });
  }
}
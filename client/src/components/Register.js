import React from "react";
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/userSlice';

export default function Register(){
  
  const dispatch = useDispatch();

  const [infosRegister, setInfosRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = ({ target }) => {
    setInfosRegister((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(infosRegister)
    dispatch(registerUser(infosRegister));
  };

    return (
      <>
        <div className="register-container-all">
          <div className="register-title-container">
            <span className="register-title">Register</span>
          </div>
          <div className="register-container">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="form-container"
            >
              <div className="register-input-container-all">
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  minLength={1}
                  className="register-input"
                />
                <input
                  type="text"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  minLength={1}
                  className="register-input"
                />
                <input
                  type="text"
                  name="passwordConfirm"
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                  minLength={1}
                  className="register-input"
                />
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  minLength={1}
                  className="register-input"
                />
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  minLength={1}
                  className="register-input"
                />
                <div className="register-information-container-all">
                  <div className="register-information-container-left">
                    <input className="register-checkbox" type="checkbox" required/>
                    <span className="register-information-text-left">I agree with the</span>
                    <span className="register-information-link-left">&nbsp;privacy policy</span>
                    <span className="register-information-text-left">&nbsp;and</span>
                    <span className="register-information-link-left">&nbsp;the CGT</span>
                  </div>
                  <div className="register-information-container-left">
                    <input className="register-checkbox" type="checkbox"/>
                    <span className="register-information-text-left">I wish to receive newsletter</span>
                  </div>
                </div>
              </div>
              <button className="register-button" type="submit">
                Register
              </button>
            </form>
            <div className="register-register-container">
              <span className="register-register-text">Already have an account?</span>
              <Link to="/login" className="menu-burger-link-prevent-style">
                <span className="register-register-link">&nbsp;Login</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="back-container">
          <Link to="/" className="menu-burger-link-prevent-style">
            <span className="back-text">Back</span>
          </Link>
        </div>
      </>
    );
}

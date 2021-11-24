import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsShieldLockFill } from "react-icons/bs";
import { BiShow, BiHide } from "react-icons/bi";
import { ImEnter } from "react-icons/im";
import { FaUserAlt, FaAddressBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import "../styles/mainStyles.css";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {register} from '../../../actions/userActions'

function UserRegister() {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState("false");

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handelRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userDetails, history))
  };

  const handelShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="register" onSubmit={handelRegisterSubmit}>
            <div className="login__field fas" style={{ display: "flex" }}>
              <FaUserAlt className="login__icon" />
              <input
                onChange={handelInputChange}
                name="firstName"
                type="text"
                className="login__input"
                placeholder="First Name"
                style={{ marginRight: "10px" }}
              />
              <input
                onChange={handelInputChange}
                name="lastName"
                type="text"
                className="login__input"
                placeholder="Lasts Name"
              />
            </div>
            <div className="login__field fas">
              <MdEmail className="login__icon" />
              <input
                onChange={handelInputChange}
                name="email"
                type="text"
                className="login__input"
                placeholder="Email"
              />
            </div>
            <div className="login__field fas">
              <AiFillPhone className="login__icon" />
              <input
                onChange={handelInputChange}
                name="phone"
                type="number"
                className="login__input"
                placeholder="Phone Number"
              />
            </div>
            <div className="login__field fas">
              <FaAddressBook className="login__icon" />
              <textarea
                rows="6"
                cols="30"
                name="address"
                onChange={handelInputChange}
                type="text"
                className="login__input"
                placeholder="Address"
              />
            </div>
            <div className="login__field">
              <BsShieldLockFill className="login__icon" />
              <input
                onChange={handelInputChange}
                name="password"
                type={showPassword ? "password" : "text"}
                className="login__input"
                placeholder="Password"
              />
              {showPassword ? (
                <BiShow onClick={handelShowPassword} />
              ) : (
                <BiHide onClick={handelShowPassword} />
              )}
            </div>
            <button type="submit" className="button login__submit">
              <span className="button__text">Register Now</span>
              <ImEnter className="button__icon" />
            </button>
            <Link to="/login">
              <p className="switchTo">already have an account?</p>
            </Link>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;

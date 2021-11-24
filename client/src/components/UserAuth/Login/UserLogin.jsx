import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa';
import { BsShieldLockFill } from 'react-icons/bs';
import { ImEnter } from 'react-icons/im';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login} from '../../../actions/userActions'

import '../styles/mainStyles.css'

function UserLogin() {

    const history = useNavigate();
    const dispatch = useDispatch();
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password : '',
    })

    const handelCredentials = (e) => {
        const {name, value} = e.target;
        setLoginDetails({...loginDetails, [name]:value})
    }

    const handelLoginSubmit = (e) => {
            e.preventDefault()
            dispatch(login(loginDetails, history));
    }

    return (
        <div className="container">
        <div className="screen-login">
            <div className="screen__content">
                <form className="login" onSubmit = {handelLoginSubmit}>
                    <div className="login__field fas">
                        <FaUserAlt className = 'login__icon'/>
                        <input type="text" onChange = {handelCredentials} name = 'email' className="login__input" placeholder="Email" />
                    </div>
                    <div className="login__field">
                        <BsShieldLockFill className = 'login__icon' />
                        <input type="password" onChange = {handelCredentials} name = 'password' className="login__input" placeholder="Password" />
                    </div>
                    <button className="button login__submit" type = 'submit'>
                        <span className="button__text">Log In Now</span>
                        <ImEnter className = 'button__icon' />
                    </button>	
                    <Link to ='/register'>	
                    <p className = 'switchTo'>dont have an account?</p>	
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
    )
}

export default UserLogin

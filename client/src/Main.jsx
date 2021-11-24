import React from 'react'
import { reduxActionTemplate } from './actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import {Routes , Route} from 'react-router-dom'
import UserLogin from './components/UserAuth/Login/UserLogin'
import UserRegister from './components/UserAuth/Register/UserRegister'
import MainScreen from './components/Home/MainScreen'

function Main() {
    const dispatch = useDispatch()

    return (
        <div>
            <Routes>
                <Route exact path = '/' element = {<MainScreen />} />
                <Route exact path = '/login' element = {<UserLogin />} />
                <Route exact path = '/register' element = { <UserRegister />} />
            </Routes>
        </div>
    )
}

export default Main

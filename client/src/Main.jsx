import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Routes , Route, Navigate} from 'react-router-dom'
import UserLogin from './components/UserAuth/Login/UserLogin'
import UserRegister from './components/UserAuth/Register/UserRegister'
import MainScreen from './components/Home/MainScreen'

function Main() {
    const dispatch = useDispatch()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    return (
        <div>
            <Routes>
                {!user ? <Route path="*" element={<Navigate to ="/login" />}/>:<Route exact path = '/' element = {<MainScreen />} />}
                <Route exact path = '/login' element = {<UserLogin />} />
                <Route exact path = '/register' element = { <UserRegister />} />
            </Routes>
        </div>
    )
}

export default Main

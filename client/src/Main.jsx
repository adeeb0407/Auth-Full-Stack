import React, {useState} from 'react'
import {Routes , Route, Navigate} from 'react-router-dom'
import UserLogin from './components/UserAuth/Login/UserLogin'
import UserRegister from './components/UserAuth/Register/UserRegister'
import MainScreen from './components/Home/MainScreen'

function Main() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    return (
        <div>
            <Routes>
                {user !== null ? <Route exact path = '/' element = {<MainScreen />} /> : <Route path="*" element={<Navigate to ="/login" />}/>}
                <Route exact path = '/register' element = { <UserRegister />} />
                <Route exact path = '/login' element = {<UserLogin />} />
            </Routes>
        </div>
    )
}

export default Main

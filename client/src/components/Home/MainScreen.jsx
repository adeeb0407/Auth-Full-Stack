import * as React from 'react';
import {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router';
import {useLocation } from 'react-router-dom';
import { useDispatch  } from 'react-redux';
import decode from 'jwt-decode';
import ProfileCard from './ProfileCard'

export default function MainScreen() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const logout = () => {
        dispatch({type : 'LOGOUT'})
        navigate('/login');
        setUser(null);
      };
      useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

  return (
      <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Main Screen
          </Typography>
          <Button color="inherit" onClick ={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    {!user ? '' : <ProfileCard 
    user = {user}
     />}
    </>
  );
}

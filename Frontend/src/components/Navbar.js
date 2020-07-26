import React, {useState, useContext} from 'react';
import {Modal,Button} from 'react-bootstrap'
import Login from './Login';
import fire from '../config/Firebase';
import { AuthContext } from '../context/AuthContext';
import { Route, Redirect,Link } from 'react-router-dom';
import Register from './Register';

const Navbar = () => {
    const [show2, setShow2] = useState(false);
    const {Auth} = useContext(AuthContext)
  
    return ( 
        <>
            {Auth?<>
            <Button onClick={()=>fire.auth().signOut()}>Logout</Button>
            <Link to='/dashboard'>
            <Button>Dashboard</Button>
            </Link>
            <Link to='/'>
            <Button>Home</Button>
            </Link>
            </>:<>
            <Login/>
            <Register/>
            </>}
        </>
     );
}
 
export default Navbar;
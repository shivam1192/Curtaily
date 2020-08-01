import React, {useState, useContext} from 'react';
import {Modal,Button,Navbar,Nav} from 'react-bootstrap'
import Login from './Login';
import fire from '../config/Firebase';
import { AuthContext } from '../context/AuthContext';
import { Route, Redirect,Link } from 'react-router-dom';
import Register from './Register';
import ConvertUrl from './ConvertUrl';

const NavBar = () => {
    const {Auth} = useContext(AuthContext)
  
    return ( 
        <>
            <Navbar style={{backgroundColor:'#4c7a9c'}} collapseOnSelect fixed="top" expand="lg">
                <Navbar.Brand href="/" style={{color:"white"}}>Curtaily</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                    {Auth?<>
                        <Link to='/' className="mt-2 mr-4" style={{color:'white'}}>Home</Link>
                        <Link to='/dashboard' className="mt-2 mr-3" style={{color:'white'}}>Dashboard</Link>
                        <Nav.Link style={{color:'white'}} className="mr-3" onClick={()=>fire.auth().signOut()}>Logout</Nav.Link>
                        <ConvertUrl/>
                        </>:<>
                        <Login/>
                        <Register/>
                        </>}
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </>
     );
}
 
export default NavBar;
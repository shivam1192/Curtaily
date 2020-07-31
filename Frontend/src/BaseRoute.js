import React, { useContext } from 'react';
import {Route,Link,BrowserRouter, Redirect, useLocation} from 'react-router-dom'
import MainDashboard from './components/Dashboard/MainDashboard'
import MainHome from './components/Home/MainHome'
import { AuthContext } from './context/AuthContext';
import PageRedirect from './components/PageRedirect';

const BaseRoute = () => {
    const {Auth} = useContext(AuthContext)
    const regStr = new RegExp()
    return ( 
        <>
        <BrowserRouter>
            <Route exact path='/' component={MainHome}/>
            <Route exact path="/dashboard">
                {Auth?<><MainDashboard/></>:<><Redirect to="/"/></>}
            </Route>
        <Route exact path={/\/0x[a-z0-9]{6}/} component={()=> (<PageRedirect urlhash={window.location.pathname}/>)}/>
        </BrowserRouter>
        </>
     );
}
 
export default BaseRoute;

import React, { useContext } from 'react';
import {Route,Link,BrowserRouter, Redirect} from 'react-router-dom'
import MainDashboard from './components/Dashboard/MainDashboard'
import MainHome from './components/Home/MainHome'
import { AuthContext } from './context/AuthContext';

const BaseRoute = () => {
    const {Auth} = useContext(AuthContext)
    return ( 
        <>
        <BrowserRouter>
            <Route exact path='/' component={MainHome}/>
            <Route exact path="/dashboard">
                {Auth?<><MainDashboard/></>:<><Redirect to="/"/></>}
            </Route>
        </BrowserRouter>
        </>
     );
}
 
export default BaseRoute;
import React from 'react';
import { Button } from 'react-bootstrap';
import fire from '../../config/Firebase';

const MainDasboard = () => {
    return ( 
        <>
        Welcome to MainDasboard
        <Button onClick={()=>fire.auth().signOut()}>Logout</Button>
        </>
     );
}
 
export default MainDasboard;
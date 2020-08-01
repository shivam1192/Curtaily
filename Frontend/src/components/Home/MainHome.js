import React from 'react';
import NavBar from '../Navbar'
import { transfer,web3 } from '../../App';
import Home from '../../home.png'
import { Button } from 'react-bootstrap';


const MainHome = () => {
    return ( 
        <>
            <NavBar/>
            <div className="row">
                <div className="col-lg-4">
                    <h1 style={{ marginTop: '215px', fontSize: '97px', marginLeft: '78px', color: '#4c7a9c', fontFamily:'inherit', textDecoration:'underline', textDecorationColor:'#ffe8ae' }} >Curtaily</h1>
                    <span style={{    marginLeft: '76px', fontSize: '20px', color: '#eb842f'}}>Store your curtailed URL in Blockchain.</span><br/>
                    <span style={{    marginLeft: '76px', fontSize: '20px', color: '#eb842f'}}>Safely | Securely | Immortally</span><br/>
                </div>
                <div className="col-lg-8" style={{marginTop:"70px"}}>
                <img src={Home} height="640"/>
                </div>
            </div>
        </>
     );
}
 
export default MainHome;
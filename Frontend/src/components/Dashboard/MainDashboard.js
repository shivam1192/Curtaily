import React, { useEffect, useState } from 'react'
import NavBar from '../Navbar'
import fire from '../../config/Firebase'
import { transfer } from '../../App'
import { Card } from 'react-bootstrap'


const MainDasboard = () => {
    const [lurl,setLurl] = useState()
    const [turl,setTurl] = useState()

    useEffect(()=>{
            const user = fire.auth().currentUser
            const fun = async() => {
                await transfer.methods.get_turl_lurl(user.email).call().then((res)=>{
                    setLurl(Object.values(res)[0])
                    setTurl(Object.values(res)[1])
                }).catch((err)=>{
                    console.log(err);
                })
            }
            fun()    
    })

    return ( 
        <>
         <NavBar/>
        {lurl&&turl?<div style={{marginTop:'70px'}}>
        {lurl.map((url, index)=>{
            return(
                <>
                <Card>
                    <Card.Body>
                     <Card.Title>{index + 1}.</Card.Title>
                        <Card.Text>
                        <a href={window.location.href.slice(0,21)+"/"+turl[index]} target="_blank">{window.location.href.slice(0,21)}/{turl[index]}</a>
                        </Card.Text>
                     <Card.Text>{url}</Card.Text>
                    </Card.Body>
                    </Card>
                </>
            )
        })}
        </div>:<div style={{marginTop:'75px'}>Loading.....div>}
        </>
     );
}
 
export default MainDasboard;

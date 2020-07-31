import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import fire from '../../config/Firebase'
import { transfer } from '../../App'


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
         <Navbar/>
        Welcome to MainDasboard<br/>
        {lurl&&turl?<>
        {lurl.map((url, index)=>{
            return(
                <ul>
                    <li>{url} - <a href={window.location.href.slice(0,21)+"/"+turl[index]} target="_blank">{window.location.href.slice(0,21)}/{turl[index]}</a></li>
                </ul>
            )
        })}
        </>:<>Loading...</>}
        </>
     );
}
 
export default MainDasboard;
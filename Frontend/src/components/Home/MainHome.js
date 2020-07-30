import React from 'react';
import Navbar from '../Navbar'
import { transfer,web3 } from '../../App';


const MainHome = () => {

    const sendurl = async(event) => {
        event.preventDefault()
        let sender = await web3.eth.getAccounts()
        await transfer.methods.Convert_lurl_turl("shivam","testing").send({from:"0x6835eE2e88223a5dd53189e555C0f9AD74a79E3E", gas:200000})
        await transfer.methods.Convert_lurl_turl("shivam","testing").call().then((res)=>{
            console.log(JSON.stringify(res))
        }).catch((err)=>{
            console.log(err);
        })
    }

    return ( 
        <>
            <Navbar/>
            welocome to home
            <form onSubmit={sendurl}>
                <input type="text" name="lurl"/>
                <button type="submit">CLickHere</button>
            </form>
        </>
     );
}
 
export default MainHome;
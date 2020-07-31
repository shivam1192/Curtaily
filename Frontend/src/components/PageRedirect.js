import React, { useEffect } from 'react';
import { transfer, web3 } from '../App';
import Web3 from 'web3';

const PageRedirect = (props) => {
    useEffect(()=>{
        const string = web3.utils.hexToAscii(props.urlhash.slice(1,9))
        const fun = async() => {
            await transfer.methods.Correspond_lurl(web3.utils.asciiToHex(string)).call().then((res)=>{
                console.log(res);
                window.location.href = res
            }).catch((err)=>{
                console.log(err);
            })
        }
        fun()
       
    })
    return ( 
        <>
        </>
     );
}
 
export default PageRedirect;
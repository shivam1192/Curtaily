import React from 'react';
import AuthContextProvider from './context/AuthContext';
import BaseRoute from './BaseRoute';
import Web3 from 'web3';
import {ContractABI} from './ContractABI';

export let web3 = new Web3(Web3.givenProvider||process.env.REACT_APP_IP)
//exporting key with above given env variable
window.ethereum.enable()
export let transfer = new web3.eth.Contract(ContractABI,process.env.REACT_APP_API_KEY)

const App = () => {
    return ( 
        <>
        <AuthContextProvider>
            <BaseRoute/>
        </AuthContextProvider>
        </>
     );
}
 
export default App;

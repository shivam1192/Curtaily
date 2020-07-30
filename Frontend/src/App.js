import React from 'react';
import AuthContextProvider from './context/AuthContext';
import BaseRoute from './BaseRoute';
import Web3 from 'web3';
import {ContractABI} from './ContractABI';

export let web3 = new Web3(Web3.givenProvider||"http://127.0.0.1:8545")
window.ethereum.enable()
export let transfer = new web3.eth.Contract(ContractABI,"0x237d12cDd7ECA9dA884A01d66833fa70d2Af04c5")

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
import React from 'react';
import AuthContextProvider from './context/AuthContext';
import BaseRoute from './BaseRoute';

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
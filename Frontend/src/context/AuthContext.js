import React,{createContext,useState, useEffect} from 'react';
import fire from '../config/Firebase';

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [Auth,setAuth] = useState()
    console.log(Auth);
    useEffect(()=>{
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                setAuth(user)
            }else{
                setAuth()
            }
        })
    },[])
    
    return ( 
        <AuthContext.Provider value={{Auth,setAuth}}>
           {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;
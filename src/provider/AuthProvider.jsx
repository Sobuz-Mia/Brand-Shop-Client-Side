import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loggedIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const loggedOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,user=>{
            setUser(user)
        }) 
        return ()=>{
            unSubscribe()
        }
    },[])

    const AuthInfo = {
        user,
        loading,
        createUser,
        loggedOut,
        loggedIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
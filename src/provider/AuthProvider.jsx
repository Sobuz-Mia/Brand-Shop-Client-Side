import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loggedIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const loggedOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const googleLogIn = () =>{
        return signInWithPopup(auth,googleProvider)
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
        loggedIn,
        googleLogIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
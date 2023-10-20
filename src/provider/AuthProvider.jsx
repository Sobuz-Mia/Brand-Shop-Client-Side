import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    // All state handle
    const [brands,setBrands] = useState([]);
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // create user with email and password
    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // User Logged in
    const loggedIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // User Signout
    const loggedOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    //Google login
    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    
    //load all data from database

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>{
            setBrands(data)
        })

    },[])
    //Handle Loading state 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,user=>{
            setUser(user)
            setLoading(false)
        }) 
        return ()=>{
            unSubscribe()
        }
    },[])

    //Context Api using object
    const AuthInfo = {
        user,
        loading,
        createUser,
        loggedOut,
        loggedIn,
        googleLogIn,
        brands
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


export const AuthContext=createContext();

const auth=getAuth(app)


const AuthProvider = ({children}) => {
    // const user ={displayName : 'Miraz'}
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)

    const PrviderLogin=(provider)=>
    {
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const createUser=(email,password)=>
    {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>
    {  
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile=(profile)=>
    {
        return updateProfile(auth.currentUser,profile);
    }

    const varifyEmail=()=>
    {
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(()=>
    {
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>
        {
            console.log(currentUser)
            if(currentUser===null || currentUser.emailVerified)
            {
                setUser(currentUser)
            }
            setLoading(false)
        })
        return ()=>
        {
            unsubscribe()
        } 

    },[])

    const logOut=()=>
    {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo={user,
        loading,
        setLoading,
        createUser, 
        PrviderLogin,
        logOut,
        signIn,
        updateUserProfile,
        varifyEmail
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
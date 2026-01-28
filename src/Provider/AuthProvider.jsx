import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext();
import {
    createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from "firebase/auth";
import axios from 'axios';

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [role, setRole] = useState('');

    const googleProvider = new GoogleAuthProvider()


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }



    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    const updateUser = (updatedData) => {
        // console.log(updatedData);
        return updateProfile(auth.currentUser, updatedData)
    }


    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])


    useEffect(() => {
        if (!user) return
        axios.get(`http://localhost:5000/users/role/${user.email}`)
            .then(res => {
                setRole(res.data.role)
            })
    }, [user])

    console.log(role);

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        googleSignIn,
        role,

    }
    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
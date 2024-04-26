import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { PropTypes } from "prop-types"
// import useAxiosPublic from "../api/AxiosPublic/useAxiosPublic";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setLoading] = useState(true)
    // const axiosPublic = useAxiosPublic()

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            // if(currentUser){
            //     const userInfo = {email: currentUser.email}
            //     axiosPublic.post('/jwt', userInfo)
            //     .then(res=>{
            //         if(res.data.token){
            //             localStorage.setItem('access-token', res.data.token)
            //             setLoading(false)
            //         }
            //     })

            // }
            // else{
            //     localStorage.removeItem('access-token')
            //     setLoading(false)
            // }
            setLoading(false)

        })
        return (() => {
            unSubscribe()
        })
    }, [])

    const createUserWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        createUser,
        logInUser,
        userLogOut,
        createUserWithGoogle,
        loading
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;
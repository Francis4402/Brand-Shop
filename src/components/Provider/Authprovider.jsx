import PropTypes from 'prop-types'
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config'
import { createContext, useEffect, useState } from 'react'

const auth = getAuth(app)

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const Authprovider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (name, email, password, photoURL) => {
        return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return updateProfile(userCredential.user, {
                displayName: name,
                photoURL : photoURL
            })
             .then(() => {
                return userCredential.user;
             })
             .catch((error) => {
                throw error;
            });
        })
    }

    
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authinfo = {createUser, user, setUser, signInUser, logOut, signwithGoogle}

  return (
    <AuthContext.Provider value={authinfo}>
        {children}
    </AuthContext.Provider>
  )
}


Authprovider.propTypes = {
    children: PropTypes.node
}

export default Authprovider
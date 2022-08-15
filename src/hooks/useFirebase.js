import  { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from '../components/Firebase/fitebase.init';


initializeAuthentication()
const useFirebase = () => {
    const[user, setUser] = useState({})
    const[isLoading, setIsLoading] = useState(true)
    const[error, setError] = useState('')

    
    const auth = getAuth();
    const signUpWithEmailPassword = ({ name, email, password }) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const newUser = { email: email, displayName: name };
                setUser(newUser);
                setError('')
                // saveUser({ displayName: name, email })

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setError('')
                }).catch((error) => {
                    setError(error.message)
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    const loginWithEmailPassword = ({ email, password }) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                // An error happened.
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setIsLoading(false)
            } else {
                setUser({})
                setIsLoading(false)
            }
        });
    }, [])
    return {
        signUpWithEmailPassword,
        loginWithEmailPassword,
        user,
        logOut,
        isLoading,
        error,
        setIsLoading

    }
};

export default useFirebase;
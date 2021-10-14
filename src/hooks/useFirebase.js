import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAppAuthetication from "../Firebase/firebase.init";

initializeAppAuthetication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [info, setInfo] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        console.log('hi');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);

            })
            .catch(error => {
                console.log(error.message);
            })
    };
    const signInWithEmail = (info) => {
        const { name, email, password } = info;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                // ...
            }).catch(error => {
                console.log(error.message);
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({});
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    return {
        user,
        handleSignOut,
        googleSignIn,
        signInWithEmail
    };
};

export default useFirebase;
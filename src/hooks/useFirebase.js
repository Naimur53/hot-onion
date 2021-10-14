import { GoogleAuthProvider, signInWithPopup, getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAppAuthetication from "../Firebase/firebase.init";

initializeAppAuthetication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        console.log('hi');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log("hi");
                setUser(user);

            })
            .catch(error => {
                console.log(error.message);
            })
    };
    const signUpWithEmail = (info) => {
        const { email, password } = info;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                // ...
            }).catch(error => {
                console.log(error.message);
            })
    };
    const logInWithEmail = info => {
        const { email, password } = info;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
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
        signUpWithEmail,
        logInWithEmail
    };
};

export default useFirebase;
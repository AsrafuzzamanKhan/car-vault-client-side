import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
initializeFirebase();



const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setError('');
                const newUser = { email, displayName: name };
                // send name to fire base 
                setUser(newUser);

                // save to database 
                saveUser(email, name, 'POST');


                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/')
            })
            .catch((error) => {

                setError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location.state?.from || '/';
                history.replace(destination)
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // observer  user
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = (history) => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setError('');

            history.replace('/')
        }).catch((error) => {
            setError(error.message)
        })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                // setUser(user)
                const destination = location.state?.from || '/';
                history.replace(destination)
                setError('');
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        isLoading,
        registerUser,
        loginUser,
        logOut,
        error,
        signInWithGoogle
    }
};

export default useFirebase;
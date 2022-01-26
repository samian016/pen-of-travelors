import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import initializationAuth from '../firebase/firebase.initialize';


initializationAuth();
const useFirebase = () => {


    const [user, setUser] = useState({});
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [isLogged, setIsLogged] = useState(false);







    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };

        fetch("http://localhost:5000/users", {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then();

    };








    const auth = getAuth();
    const setNewUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
        }).then((result) => {
            setUser(result.user)
        }).catch((error) => {
            setMessage(error.message)
        });
    }
    const verification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            }).catch((error) => {
                setMessage(error.message)

            });
    }
    const signUsingGoogle = (url, history) => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                verification();
                setIsLogged(true);
                setUser(result.user);
                // console.log(history);   
                saveUser(result.user.email, result.user.displayName, "PUT");
                history.push(url);
            }).catch((error) => {
                setMessage(error.message)

            }).finally(() => {
                setIsLoading(false)
            });
    }
    const createUsingEmail = (email, password, name, history, url) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setNewUserName(name);
                verification();
                setUser(user);
                saveUser(email, name, "POST");
                setIsLogged(true);
                history.push(url);
            })
            .catch((error) => {
                setMessage(error.message);
            }).finally(() => {
                setIsLoading(false)
            });
    }
    const signUsingEmail = (email, password, history, url) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                verification();
                setUser(result.user);
                history.push(url);
                setIsLogged(true);
            })
            .catch((error) => {
                setMessage(error.message);
            }).finally(() => {
                setIsLoading(false)
            });
    }

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage('check mail.')
            })
            .catch((error) => {
                setMessage(error.message);
            }).finally(() => {
                setIsLoading(false)
            });
    }
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setIsLogged(false);
            setMessage("")
        }).catch((error) => {
            setMessage(error.message)
        }).finally(() => {
            setIsLoading(false)
        });
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLogged(true);
            } else {
                setUser({});
                setIsLogged(false);
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])







    useEffect(() => {

        fetch(`http://localhost:5000/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setAdmin(data.admin);
            });

    }, [user.email]);



    return {
        user,
        message,
        logOut,
        isLoading,
        admin,
        signUsingGoogle,
        createUsingEmail,
        signUsingEmail,
        resetPassword,
        isLogged
    }
};

export default useFirebase;
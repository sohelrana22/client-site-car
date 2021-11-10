import {
     GoogleAuthProvider,
     getAuth,
      signInWithPopup,
       onAuthStateChanged,
        signOut,
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        updateProfile
     } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Firebase/firebase.init';

initializeAuthentication()
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
const [user, setUser] = useState({})
const [error, setError] = useState("")
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [isLoading, setIsLoading] = useState(true);

    // google sign in
    function signInWithGoogle() {
     return   signInWithPopup(auth, googleProvider)
    }

    // email and password sign in
    function signInWithEmail() {
       return signInWithEmailAndPassword (auth, email, password)
        
    }


    
    // Get the currently signed-in user
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (signedInUser) => {
            if (signedInUser) {
                setUser(signedInUser);
            } 
            setIsLoading(false)
          });
          return () => unsubscribe;
    },[]);

    // sign out
    function logOut () {
        signOut(auth)
        .then((result) => {
            setUser({})
          alert('logout')
          })
          .catch((error) => {
            setError(error.message);
          });
    }

    // Register with email and password
    function signUp(e){
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setName()
            alert('user has been created')
        })
        .catch(error =>{
            setError(error.message);
        })
    }

// getEmail

function getEmail(e) {
    setEmail(e?.target?.value)
}
// get name
function getName(e) {
    setName(e?.target?.value)
}
// getPassword

function getPassword(e) {
    setPassword(e?.target?.value)
}

function signUpWithEmail(){
    return createUserWithEmailAndPassword(auth,email,password)
}
function setUserName(){
    updateProfile(auth.currentUser, {
        displayName: name
      })
}
    return {
        signInWithGoogle,
        signUpWithEmail,
        logOut,
        isLoading,
        getPassword,
        getEmail,
        user,
        error,
        signUp,
        setUser,
        setError,
        getName,
        setUserName,
        signInWithEmail
    };
};

export default useFirebase;
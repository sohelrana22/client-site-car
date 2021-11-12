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
import { useHistory } from "react-router";
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
const [admin, setAdmin] = useState(false);

const history = useHistory();

    // google sign in
    function signInWithGoogle() {
     return   signInWithPopup(auth, googleProvider)
    }

    // email and password sign in
    function signInWithEmail() {
       return signInWithEmailAndPassword (auth, email, password)
        
    }

    // admin data load
    useEffect(()=> {
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }, [user.email])
   

    
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
            // save user to database
            saveUser(email, name, 'POST');
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

const saveUser = (email, displayName, method) => {
    const user = {email, displayName};
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}
    return {
        signInWithGoogle,
        signUpWithEmail,
        logOut,
        admin,
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
import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
const Login = () => {
    const [logUser,setLogUser]=useState(null);
    const auth = getAuth(app);
const provider=new GoogleAuthProvider();
const gitHubProvider= new GithubAuthProvider();
console.log(gitHubProvider)
const handleGoogleSignIn=()=>{
   signInWithPopup(auth,provider)
   .then(result=>{
    const user=result.user;
    setLogUser(user);
    console.log(user);
   })
   .catch(error=>{
    console.log(error)
   })
}
const handleGoogleLogOut=()=>{
    signOut(auth)
    .then(result=>{
        setLogUser(result)
    })
    .catch(error=>{
        console.log(error)
    })
}
const handleGithubSignIn=()=>{
    signInWithPopup(auth,gitHubProvider)
    .then(result=>{
        const githubUser=result.user;
        console.log(githubUser)
        setLogUser(githubUser);
    })
    .catch(error=>{
        console.log(error);
    })
}
    return (
        <div>
            {
                logUser ? 

                <button onClick={handleGoogleLogOut}>logout</button>
                :
<>
            <button onClick={handleGoogleSignIn}>Google login</button>
            <button onClick={handleGithubSignIn}>Github login</button>
</>
            }
            {
                logUser &&
                <div>
                    <h3>user Name:{logUser.displayName}</h3>
                    <h3>email:{logUser.email}</h3>
                    <img src={logUser.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;
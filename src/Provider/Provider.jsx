import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import { createContext, useState } from 'react';
import app from '../Firebase/firebase.init';

export const authContext = createContext(null);

const Provider = ({ children }) => {
    const [formLoading, setFormLoading] = useState(false);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    function signUpUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    function continueWithGoogle() {
        return signInWithPopup(auth, googleProvider);
    }
    function continueWithGithub() {
        return signInWithPopup(auth, githubProvider);
    }


    const authInfo = { formLoading, setFormLoading, continueWithGoogle, continueWithGithub, signUpUser };
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Provider;
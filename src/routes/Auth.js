import { authService, firebaseInstanc } from "fbase";
import React, { useState } from "react";
import AuthForm from "components/AuthForm";

const Auth = () => {
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstanc.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstanc.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider);
    };

    return (
        <div>
            <AuthForm />
            <div>
                <button onClick={onSocialClick} name="github">
                    Continue with Google
                </button>
                <button onClick={onSocialClick} name="google">
                    Continue with Github
                </button>
            </div>
        </div>
    );
};
export default Auth;

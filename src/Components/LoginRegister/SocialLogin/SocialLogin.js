import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-primary w-80">Continue With Google</button>
        </div>
    );
};

export default SocialLogin;
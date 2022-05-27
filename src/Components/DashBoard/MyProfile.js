import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const handleProfile = event => {
        event.preventDefault();
        const profile = {
            email: user.email,
            name: user.displayName,
            education: event.target.education.value,
            location: event.target.location.value,
            phon: event.target.phon.value,
            linkedIn: event.target.linkedIn.value,
        }
        const url = `http://localhost:5000/profile`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Successful Update Profile')
                event.target.reset();
            })
        console.log(profile);
    };
    return (
        <div>
            <h1 className='text-2xl text-primary font-bold'>My Profile</h1>
            <div class="card lg:w-6/12 lg:mx-60 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <form onSubmit={handleProfile} className='lg:ml-16 '>
                        <div className="form-control w-full max-w-xs">
                            <div class="avatar flex justify-center items-center pt-4">
                                <div class="w-20 mb-4 rounded-full ring ring-primary ring-offset-base-100">
                                    <img src={user.photoURL} alt="" />
                                </div>
                            </div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={user.displayName}
                                readOnly
                                className="input input-bordered w-full max-w-xs mb-3"
                            />
                        </div>
                        {/* email  */}
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={user.email}
                                readOnly
                                className="input input-bordered w-full max-w-xs mb-3"
                            />
                        </div>
                        {/* education */}
                        <div className="form-control w-full max-w-xs pb-3">
                            <input
                                type="text"
                                name='education'
                                placeholder="Education"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        {/* location  */}
                        <div className="form-control w-full max-w-xs pb-3">
                            <input
                                type="text"
                                name='location'
                                placeholder="Location (city/district)"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        {/* phon Number  */}
                        <div className="form-control w-full max-w-xs pb-3">
                            <input
                                type="text"
                                name='phon'
                                placeholder="Phone Number"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        {/* LinkedIn profile link  */}
                        <div className="form-control w-full max-w-xs pb-3">
                            <input
                                type="text"
                                name='linkedIn'
                                placeholder="LinkedIn profile link"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <input className='btn btn-primary text-white w-full max-w-xs' type="submit" value='update' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MyProfile;
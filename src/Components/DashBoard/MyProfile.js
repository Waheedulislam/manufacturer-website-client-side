import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profileUpData, setProfileUpData] = useState([]);
    console.log(profileUpData);
    // update user profile
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
        const url = `https://protected-gorge-88195.herokuapp.com/user/${user.email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data update', data);
                toast('Your Profile is  Updated. ')

            })
        event.target.reset();
    };

    // get user profile
    useEffect(() => {
        const url = `https://protected-gorge-88195.herokuapp.com/user`
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setProfileUpData(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-2xl text-primary font-bold'>My Profile</h1>
            <div class="card lg:w-6/12 lg:mx-60 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <div>
                        {
                            profileUpData.map(profile => {
                                if (user.email === profile.email) {
                                    return <ul>
                                        <p>{profile.email}</p>
                                        <p>{profile.phon}</p>
                                    </ul>
                                }
                            })
                        }
                    </div>
                    <form onSubmit={handleProfile} className='lg:ml-16 '>
                        <div className="form-control w-full max-w-xs">

                            <input
                                type="text"
                                placeholder="Your Name"
                                value={user.displayName}
                                readOnly
                                className="input input-bordered w-full max-w-xs mb-3"
                            />
                        </div>
                        <p>{
                            profileUpData.email
                        }</p>
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
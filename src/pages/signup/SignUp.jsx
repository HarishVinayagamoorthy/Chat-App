import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
    const [input, setInputs] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    });

    const {loading, signup} = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...input, gender});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await signup(input);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type='text' value={input.fullName} placeholder='John Doe' className='w-full input input-bordered  h-10'
                        onChange={(e) => setInputs({...input, fullName: e.target.value})} />
                    </div>

                    <div>
                        <label className='label p-2 '>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' value={input.username} placeholder='johndoe' className='w-full input input-bordered h-10' 
                        onChange={(e) => setInputs({...input, username: e.target.value})}/>
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            value={input.password}
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            onChange={(e) => setInputs({...input, password: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            value={input.confirmPassword}
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                            onChange={(e)=> setInputs({...input, confirmPassword: e.target.value})}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender} />

                    <Link to={'/login'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

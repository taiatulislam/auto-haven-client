import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../providers/AuthProvider';
import { BsEyeFill, BsEyeSlashFill, BsGoogle } from 'react-icons/bs';

const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location.state ? location.state : '/')
                Swal.fire({
                    title: 'Success!',
                    text: 'SignIn successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            })
            .catch(error => {
                console.log(error.code, error.message);
                return Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
    }

    const handleGoogle = e => {
        e.preventDefault();
        googleSignIn()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success!',
                    text: 'User SignIn successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.code, error.message);
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
    }

    return (
        <div className='h-screen py-20' style={{ backgroundImage: 'url(https://i.ibb.co/wdbqWhv/auto-cover.jpg)', backgroundPosition: 'center center' }}>
            <div className='flex flex-col md:flex-row border-2 border-black rounded-lg max-w-5xl mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]'>
                <div className='sm:w-full md:w-1/2 relative bg-gradient-to-r from-[#ffb956] to-[#f8a007] text-center text-white'>
                    <h2 className="text-4xl font-bold mt-10 mb-5">Welcome To</h2>
                    <img src='https://i.ibb.co/nwnDrg5/car-logo.png' alt="logo" className='w-[400px] h-[200px] rounded-full p-2 mx-auto' />
                    <p className="text-3xl font-medium mt-5">Auto Haven</p>
                    <p className="font-bold">Providing reliable Car, since 2020</p>
                </div>
                <div className='bg-white bg-opacity-70 sm:w-full md:w-1/2 relative'>
                    <h2 className='text-4xl font-semibold text-center my-5 text-[#fd9c01]'>Sign In</h2>
                    <form className='px-10' onSubmit={handleSignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your email" className="input border-2 border-[#fd9c01]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md">Password</span>
                            </label>
                            <div className='flex items-center'>
                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Your password" className="input border-2 border-[#fd9c01] relative w-full" required />
                                <span onClick={() => {
                                    setShowPassword(!showPassword)
                                }}>
                                    {
                                        showPassword ? <BsEyeSlashFill className='absolute -mt-2 -ml-8'></BsEyeSlashFill> : <BsEyeFill className='absolute -mt-2 -ml-8'></BsEyeFill>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#fd9c01] text-md font-medium normal-case">Sign In</button>
                        </div>
                    </form>
                    <div className="form-control mt-6 px-10">
                        <button onClick={handleGoogle} className="btn bg-base-400 text-md font-medium normal-case"><BsGoogle></BsGoogle>Google Sign In</button>
                    </div>
                    <p className='px-10 mt-4 mb-10'>New to the site? <Link to="/signUp" className="text-[#fd9c01]">Sign Up</Link></p>
                </div>
            </div >
        </div >
    );
};

export default SignIn;
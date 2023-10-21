import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';


const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if (password.length < 6) {
            return Swal.fire({
                title: 'Error!',
                text: 'Password length must be grater than 6',
                icon: 'error',
                confirmButtonText: 'OK'
            })

        }
        else if (!/[A-Z]/.test(password)) {
            return Swal.fire({
                title: 'Error!',
                text: 'Password should have one capital letter',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }

        else if (!/[@$!%*?&]/.test(password)) {
            return Swal.fire({
                title: 'Error!',
                text: 'Password should have one special character',
                icon: 'error',
                confirmButtonText: 'OK'
            })

        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                result.user.displayName = name;
                result.user.photoURL = photo;
                Swal.fire({
                    title: 'Success!',
                    text: 'Create User successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate('/')
            })

            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
    }

    return (
        <div className='py-3' style={{ backgroundImage: 'url(https://i.ibb.co/wdbqWhv/auto-cover.jpg)', backgroundPosition: 'center center' }}>
            <div className='flex flex-col md:flex-row rounded-lg max-w-5xl mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]'>
                <div className='bg-white bg-opacity-70 w-full mx-auto md:w-1/2 pb-5'>
                    <h2 className="text-5xl font-bold text-center mt-3">Register Here</h2>
                    <p className="text-center text-5xl text-[#fd9c01]">-------------</p>
                    <form className='px-10' onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input border-2 border-[#fd9c01]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your email" className="input border-2 border-[#fd9c01]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-md">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Your photo URL" className="input border-2 border-[#fd9c01]" required />
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
                        <div className="form-control my-5 flex-row gap-2">
                            <input type="checkbox" name="terms" required />
                            <span className="text-md font-semibold">Accept all terms and conditions.</span>
                        </div>
                        <div className="form-control">
                            <button type='submit' className="btn bg-[#fd9c01] text-white text-md font-medium normal-case">Register</button>
                        </div>
                    </form>
                    <p className='px-10 mt-4'>Already have an account? <Link to="/signin" className="text-[#fd9c01]">Sign In</Link></p>
                </div>
            </div >
        </div >
    );
};

export default SignUp;
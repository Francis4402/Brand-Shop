import { useContext, useState } from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import { AuthContext } from '../Provider/Authprovider';
import { Toaster, toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;


        if(password.length < 6){
            toast.error('Password should be at least 6 characters or longer');
            return;
        } else if(!/[A-Z]/.test(password)){
            toast.error('Your password should have at least one uppercase characters.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address.');
            return;
        }

        createUser(name, email, password, photoURL)
        .then(() => {
            
            toast.success('User registration successful!')
        })
        .catch(error => {
            console.error(error)
            toast.error('email already registered')
        })
    }

  return (
    <div>
        <Helmet>
            <title>Brand-Shop | Register</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
        <Toaster position='top-center' reverseOrder={false} />
        <div className="hero h-[700px] bg-base-100">
            <div className="hero-content flex-col p-2">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register</h1>
                
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
                <div className="card-body">
                
                    <form onSubmit={handleRegister}>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photoURL" type="text" placeholder="Photo URL" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="flex gap-6">
                            <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered w-full" required />
                            

                            <span onClick={() => setShowPassword(!showPassword)} className='btn'>
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </span>
                        </div>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-outline">Register</button>
                        </div>
                    </form>

                    <div>


                        <div className="flex gap-2 items-center">
                            <p>Already have accout</p>
                            <Link className="btn btn-link" to='/login'>Login</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register
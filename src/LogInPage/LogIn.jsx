import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import toast, { Toaster } from "react-hot-toast";


const LogIn = () => {
    const [axiosSecure] = useAxios()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate()
    // console.log(formData)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosSecure.post('/auth/login', formData);
            // console.log(response.status)

            if (response.status === 201 && response.data.email) {
                toast.success('Login successful!');
                // Redirect or navigate to the authenticated route
                navigate('/')

            } else {
                toast.error('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <Toaster/>
            <div className="hero-content">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" value={formData.email} onChange={handleChange} className="input input-bordered lg:w-60" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange} className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <Link to="/signUp"><small>New to SignUp</small></Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
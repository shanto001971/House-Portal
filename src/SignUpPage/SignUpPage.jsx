import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import toast, { Toaster } from "react-hot-toast";


const SignUpPage = () => {
    const [axiosSecure] = useAxios()
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        role: 'House Owner',
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosSecure.post('/register', formData);
            console.log(response.data);

            if (response.status === 201) {
                // console.log('User registered successfully');
                toast.success('User registered successfully')
                navigate('/logIn')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="hero min-h-screen bg-base-200">

            <Toaster />
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            Full Name:
                        </label>
                        <input type="text" name="fullName" className="input input-bordered" value={formData.fullName} onChange={handleChange} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            Email:
                        </label>
                        <input type="email" name="email" className="input input-bordered" value={formData.email} onChange={handleChange} />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            Password:
                        </label>
                        <input type="password" name="password" className="input input-bordered" value={formData.password} onChange={handleChange} />
                    </div>

                    <label>
                        Role:
                        <select name="role" value={formData.role} onChange={handleChange}>
                            <option value="House Owner">House Owner</option>
                            <option value="House Renter">House Renter</option>
                        </select>
                    </label>
                    <br />
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                    <Link to="/logIn"><small>Already Have a Account</small></Link>
                </form>
            </div>

        </div>
    );
};

export default SignUpPage;
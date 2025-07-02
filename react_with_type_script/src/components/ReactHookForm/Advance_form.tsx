import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import './Advance_form.module.css'

interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmpassword: string;
    state: string;
    city: string;
    zip: string;
}

const onsubmit: SubmitHandler<FormData> = data => {
    alert(
        `First Name: ${data.firstname}\nLast Name: ${data.lastname}\nEmail: ${data.email}\nState: ${data.state}\nCity: ${data.city}\nZip: ${data.zip}`
    );
};

const Advance_form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FormData>();

    const password = watch('password');

    return (
        <div className="form-container">
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        id="firstname"
                        {...register('firstname', { required: '*First name is required' })}
                    />
                    {errors.firstname && <p className="error">{errors.firstname.message}</p>}
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        {...register('lastname', { required: '*Last name is required' })}
                    />
                    {errors.lastname && <p className="error">{errors.lastname.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: '*Email is required',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: '*Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', {
                            required: '*Password is required',
                            minLength: { value: 6, message: '*Password must be at least 6 characters' },
                        })}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>
                <div>
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmpassword"
                        {...register('confirmpassword', {
                            required: '*Confirm password is required',
                            validate: value =>
                                value === password || '*Passwords do not match',
                        })}
                    />
                    {errors.confirmpassword && <p className="error">{errors.confirmpassword.message}</p>}
                </div>
                <div>
                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        id="state"
                        {...register('state', { required: '*State is required' })}
                    />
                    {errors.state && <p className="error">{errors.state.message}</p>}
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        {...register('city', { required: '*City is required' })}
                    />
                    {errors.city && <p className="error">{errors.city.message}</p>}
                </div>
                <div>
                    <label htmlFor="zip">Zip</label>
                    <input
                        type="text"
                        id="zip"
                        {...register('zip', {
                            required: '*Zip is required',
                            pattern: {
                                value: /^\d{5}$/,
                                message: '*Zip must be 5 digits',
                            },
                        })}
                    />
                    {errors.zip && <p className="error">{errors.zip.message}</p>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Advance_form;
import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow, Alert } from '../components';
import { useAppContext } from '../context/appContext';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}
const Register = () => {
    const [values, setValues] = useState(initialState);

    const { isLoading, showAlert } = useAppContext()

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    }

    const handleChange = (e) => {
        console.log(e.target);
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <Wrapper className="full-page">
            <Logo />
            <form className="form" onSubmit={onSubmit}>
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>

                {/* Alert */}
                {showAlert && <Alert />}

                {/* Toggle Name */}
                {!values.isMember && (

                    < FormRow
                        type='text'
                        name="name"
                        value={values.name}
                        handleChange={handleChange}
                    />
                )}

                {/* Email Input */}
                <FormRow
                    type='text'
                    name="email"
                    value={values.email}
                    handleChange={handleChange}
                />

                {/* Password Input */}
                <FormRow
                    type='password'
                    name="password"
                    value={values.password}
                    handleChange={handleChange}
                />

                <button type="submit" className="btn btn-block">
                    submit
                </button>

                <p>
                    {values.isMember ? "Not a Member yet?" : "Already a member?"}
                    <button type='button' onClick={toggleMember} className='member-btn'>
                        {values.isMember ? "Register" : "Login"}
                    </button>
                </p>
            </form>

        </Wrapper>
    )
}

export default Register

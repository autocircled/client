import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow, Alert } from '../components';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false,
}
const Register = () => {
    const [values, setValues] = useState(initialState);

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
                <h3>Register</h3>

                {/* Alert */}
                {values.showAlert && <Alert />}

                {/* Name Input */}
                <FormRow
                    type='text'
                    name="name"
                    value={values.name}
                    handleChange={handleChange}
                />

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
            </form>

        </Wrapper>
    )
}

export default Register

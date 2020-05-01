import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import {Redirect} from "react-router";
import { LoginForm, StyledInput, SmallBlueButton } from './styles';

const Login= (props) => {

    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    })

    const [formDisabled, setFormDisabled] = useState(true)

    const formSchema = yup.object().shape({
        email: yup 
        .string()
        .email('valid email is required')
        .required('email is required'),
        password: yup
        .string()
        .min(5, 'at least 5 characters required for password')
        .required('password is required'),
      })

      useEffect(() => {
        formSchema.isValid(formData).then(valid => {
          setFormDisabled(!valid)
        })
      }, [formData])

    const handleChange = (evt) => {

        const name = evt.target.name
        const value = evt.target.value

        yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid => {
          setFormErrors({
            ...formErrors,
            [name]: '',
          })
        })
        .catch(err => {
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0]
          })
        })
    setFormData({
        ...formData,
        [name]: value,
    })
}

    const switchRoute = () => {
        return  <Redirect to="/dashboard" />
    }

    const login = (event) => {
        event.preventDefault();
        axios
            .post('https://betterprofessorapp.herokuapp.com/api/auth/login', formData)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('name', res.data.name);
                console.log(props.history);
                window.location.href = '/dashboard'
                switchRoute();
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            
            <LoginForm onSubmit={login}>
                <h2>Log In</h2>
                <label htmlFor="name">Email</label><div className='errors'>{formErrors.email}</div>
                <StyledInput
                    value={formData.email}
                    name='email'
                    placeholder='Email'
                    onChange={handleChange}
                />
                <label htmlFor="name">Password</label><div className='errors'>{formErrors.password}</div>
                <StyledInput
                    type='password'
                    value={formData.password}
                    name='password'
                    placeholder='Password'
                    onChange={handleChange}
                />
                <SmallBlueButton>Log In</SmallBlueButton>

                <div className="create-acct">
                    <Link to="/SignUp">Create an Account</Link>
                </div>
            </LoginForm>
        </div>
    )
}

export default Login
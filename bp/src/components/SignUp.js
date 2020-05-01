import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SignUpForm, StyledInput, SmallBlueButton } from './styles';
import {Redirect} from "react-router";

const SignUp = (props) => {
 
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    // stores real time change in the form input
    const changeHandler = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(event.target.value);
    };

    const switchRoute = () => {
        return  <Redirect to="/Login" />
    }
    // sends form data to state via the state function passed down
    const submitForm = event => {
        event.preventDefault();
        // setFormData({ name: "", email: "",password: ""});
        axios.post('https://betterprofessorapp.herokuapp.com/api/auth/register', formData)
            .then(res => {
               console.log(res.data)
               window.location.href = '/Login'
               switchRoute(); 
            })
            .catch(err => console.log(err.response));
    }
    return (
        <SignUpForm onSubmit={submitForm}>
            <h2>Sign Up</h2>
            <label htmlFor="name">Name</label>
            <StyledInput
                autoComplete="off"
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                onChange={changeHandler}
                value={formData.name}
                required />
            <label htmlFor="email">Email</label>
            <StyledInput
                autoComplete="off"
                name="email"
                id="email"
                type="text"
                placeholder="Email"
                onChange={changeHandler}
                value={formData.email}
                required/>
            <label htmlFor="password">Password</label>
            <StyledInput
                autoComplete="off"
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                onChange={changeHandler}
                value={formData.password}
                required/>
                {/* <button type="submit" >Register</button> */}
            <SmallBlueButton>Sign Up</SmallBlueButton>
            <Link to="/Login">Already have an account? Log In</Link>
        </SignUpForm>
    );
};
export default SignUp;
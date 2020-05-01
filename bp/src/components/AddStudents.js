import React, {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';
import { AddStudentForm, StyledInput, SmallBlueButton, BigBlueButton } from './styles';

function AddStudent() {
    const [newStudent, setNewStudent] = useState({
        name: '',
        email: ''
    })

    const onChangeHandler = e => {
        const { name, value } = e.target;
        setNewStudent({...newStudent, [name]: value})
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        axiosWithAuth()
            .post('/api/students', newStudent)
            .then(res => {
                console.log(res)
                window.location.href = '/YourStudents'
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            
            <AddStudentForm autoComplete="off" onSubmit={onSubmitHandler} >
                <div>
                    <Link to="/Dashboard"><BigBlueButton>Dashboard</BigBlueButton></Link><br /><br />
                    <label htmlFor="name">Name</label><br />
                    <StyledInput
                        autoComplete="off"
                        type='text'
                        name='name'
                        required
                        value={newStudent.name}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="name">Email</label><br />
                    <StyledInput
                        autoComplete="off"
                        type='email'
                        name='email'
                        value={newStudent.email}
                        onChange={onChangeHandler}
                    />
                </div>
                <SmallBlueButton>Submit</SmallBlueButton>
            </AddStudentForm>
        </div>
    );
}

export default AddStudent;
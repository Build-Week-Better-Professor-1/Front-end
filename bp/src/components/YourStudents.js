import React, {useState,useEffect} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';
import { StudentListDiv, StudentListItem, SmallBlueButton, BigBlueButton1 } from './styles';


const YourStudents = (props) => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("/api/students")
            .then(res => {
                console.log(res)
                setStudents(res.data.students)
            })
            .catch(err => console.log(err))
    },[])

    // const edit = () =>{
    //     <Link to={`/UpdateStudents/${item.id}`}/>
    // }
    const onClickDeleteHandler = (ev, item) => {
        ev.preventDefault();
        axiosWithAuth()
            .delete(`/api/students/${item.id}`)
            .then(() => window.location.href="/YourStudents")
            .catch(err => console.log(err))
    }

    return (
        <StudentListDiv>
            <Link to="/Dashboard"><BigBlueButton1>Dashboard</BigBlueButton1></Link>
            <h1>Student List</h1><br/>
            {students.map(item => {
                return (
                    <div className="student_list">
                        <StudentListItem>
                           <span>Name:</span> {item.name} 	&nbsp;	&nbsp; <span>Email:</span> {item.email}
                        </StudentListItem>
                        <Link className="edit" to={`/UpdateStudents/${item.id}`}>Edit</Link>
                        {/* <SmallBlueButton onClick={() => edit}> Edit </SmallBlueButton> */}
                        <SmallBlueButton  className="edit_delete" onClick={ev => onClickDeleteHandler(ev, item)} >Delete</SmallBlueButton>
                    </div>
                );
            })}
        </StudentListDiv>
    )

}

export default YourStudents;
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {axiosWithAuth} from "../utils/axiosWithAuth";


function Projects () {
  const [item, setItem] = useState({
    projects: '',
   
})

const {id} = useParams();

useEffect(() => {
    axiosWithAuth()
        .get(`/api/students/${id}/projects`)
        .then(res => {
            console.log(res.data.student);
            setItem(res.data.student)
        })
        .catch(err => console.log(err))
}, [])

const onChangeHandler = e => {
  const {project, value} = e.target;
  setItem({...item, [project]: value});
}

const onSubmitHandler = e => {
  e.preventDefault();
  axiosWithAuth()
      .put(`/api/students/${id}/projects`, item)
      .then(res => {
          console.log(res)
          window.location.href="/YourStudents"
      })
      .catch(err => console.log(err))
}


return(
  <div>
      <form  autocomplete="off" onSubmit={onSubmitHandler}>
          <div>
              <label htmlFor="name">Name:</label>
              <input
                  autocomplete="off"
                  type="text"
                  name="Assignment"
                  value={item.project}
                  onChange={onChangeHandler}
              />
          </div>
        
          <button>Update</button>
      </form>
  </div>
);
}
export default Projects
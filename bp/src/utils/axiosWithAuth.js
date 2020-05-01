import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://betterprofessorapp.herokuapp.com',
        headers: {
            Authorization: token
        }
    })
}
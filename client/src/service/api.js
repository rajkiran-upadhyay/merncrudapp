import axios from 'axios';
// const URL = 'http://localhost:8000';
const URL = 'https://crud-o6bs.onrender.com';
export const addUserApi = async (data) => {
    try {

        return await axios.post(`${URL}/add`, data);//  here /add is the endpoint
    } catch (error) {
        console.log("error while calling addUserApi", error);
    }
}
/////////////////////////////////////////////////////////////////////////////////////
export const getUsers = async () => {
    try {

      return await axios.get(`${URL}/all`);//  /all endpoint called with the help of api
    } catch (error) {
        console.log("error while calling getUsers api", error);
    }
}
/////////////////////////////////////////////////////////////////////////////////////

export const getUser = async (id) => {
    try {

        return await axios.get(`${URL}/${id}`);
    } catch (error) {
        console.log("error while calling getUser api", error);
    }
}
/////////////////////////////////////////////////////////////////////////////////////
export const editUser = async (user, id) => {
    //axios.post(`${URL}/${id}`,user); post api user bhej sakte hai
    try {

        return await axios.put(`${URL}/${id}`, user);
    } catch (error) {
        console.log("error while calling getUsers api", error);
    }
}
/////////////////////////////////////////////////////////////////////////////////////
export const deleteUser = async (id) => {

    try {

        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log("error while calling getUsers api", error);
    }
}
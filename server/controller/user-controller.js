
import User from '../schema/user-schema.js'
export const addUser = async (request, response) => {
    const user = request.body;
    const newUser = new User(user);//create object of schema to validate the User schema with body
    try {
        await newUser.save();//will save to mongodb db
        response.status(201).json(newUser);

    } catch (error) {

        response.status(409).json({ message: error.message });
    }
}
//////////////////////////////////////////////////////////////////////
export const getUsers = async (request, response) => {

    try {// User collection
        const users = await User.find({}) //find({}) get all documents and find({name:"raj"}) based on condition
       response.status(200).json(users);//200 : data fetched successfully, send a response to end cycle
      
    } catch (error) {

        response.status(404).json({ message: error.message }); //404 = data not found in database
    }
}
//////////////////////////////////////////////////////////////////////
export const getUser = async (request, response) => {

    try {
        //const user= await User.find({_id:request.params.id}) 
        const user = await User.findById(request.params.id)
        response.status(200).json(user);//200 : data fetched successfully, send a response to end cycle
    } catch (error) {

        response.status(404).json({ message: error.message }); //404 = data not found
    }
}
//////////////////////////////////////////////////////////////////////

export const editUser = async (request, response) => {
    let user = request.body;
    const editUser = new User(user);//validate mardega
    //({_id:request.params.id}==old object ,editUser object will replace it) 
    try {
        const user = await User.updateOne({ _id: request.params.id }, editUser)
        response.status(201).json(user);//200 : data fetched successfully, send a response to end cycle
    } catch (error) {

        response.status(409).json({ message: error.message }); //404 = data not found &201 : created successfully409 cant update
    }
}
/////////////////////////////////////////////////////////////////////////
export const deleteUser = async (request, response) => {

    try {
        await User.deleteOne({ _id: request.params.id });
        response.status(200).json({ message: 'delete succes' });// 

    } catch (error) {

        response.status(409).json({ message: error.message }); //404 = data not found &201 : created successfully
    }
}
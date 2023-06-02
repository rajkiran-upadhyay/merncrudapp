
import mongoose from "mongoose";

import autoIncrement from 'mongoose-auto-increment'

const userSchema=mongoose.Schema({
    name:String,username:String, email:String ,phone:String
});

autoIncrement.initialize(mongoose.connection);

userSchema.plugin(autoIncrement.plugin,'user');//user is a table/collection

const user=mongoose.model('user',userSchema);//create a model
export default user;

//schema is used in validation
//mongoose helps to create schema:userSchema
//model takes name of collection of cluster/database

//model verifies collection with schema
//genereate _id with autoIncrement
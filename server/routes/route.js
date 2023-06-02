import express from "express";
import {addUser} from '../controller/user-controller.js'
import { getUsers,getUser ,editUser,deleteUser} from "../controller/user-controller.js";

const router= express.Router();//

router.post('/add',addUser);
router.get('/all',getUsers);
router.get('/:id',getUser);
router.put('/:id',editUser);
router.delete('/:id',deleteUser);

export default router;
//if some api call is hit then it passes through the routes to reach controller
//so that we process the request object


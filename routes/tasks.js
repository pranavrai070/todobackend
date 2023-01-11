import express, { Router } from 'express';


import{ 
    addTodo,
    updateTodo,
    toggleTask,
    // deleteTodo,
    getAllUsers,
    getPersonalTasks,
    getAssignedTask,
    getAssignTask} from '../controller/todo-controller.js';

const route = express.Router();
import auth from "../middleware/auth.js";

route.post('/personaltask',auth,getPersonalTasks);
route.post('/assignedtask',auth,getAssignedTask);
route.post('/assigntask',auth,getAssignTask);
route.get('/taskform',auth,getAllUsers);
route.post('/addtask',auth, addTodo);
route.put('/toggletask/:id',auth, toggleTask);
route.put('/todos/:id',auth, updateTodo);
// route.delete('/todos/:id', deleteTodo);

export default route;
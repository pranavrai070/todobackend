import Todo from '../model/Todo.js';
import User from '../model/User.js';
export const addTodo = async (request, response) => {
    const {to,by}=request.body;
    try {
        const rightTo=await User.findOne({ email:to });
        const rightBy=await User.findOne({ email:by });
        if(rightTo && rightBy){
            var newTo=rightTo.email;
            var newBy=rightBy.email
        }else{
            return response.status(400).json({message:"Email id given is missing."});
        }
        const newTodo = await Todo.create({
            data: request.body.data,
            date: request.body.date,
            to:newTo,
            by:newBy,
            status:request.body.status
        });
        await newTodo.save();
        return response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const getPersonalTasks = async (request, response) => {
    const userEmail=request.body.email
    const selectedDate=request.body.date
    try {
        const todos= await Todo.find({to:userEmail,
            by:userEmail,
            date:selectedDate,
            status:{$ne:"delete"}
        }).sort({id:-1});
        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const getAssignedTask = async (request, response) => {
    const userEmail=request.body.email
    const selectedDate=request.body.date
    try {
        const todos=await Todo.find({by:{$ne:userEmail},status:{$ne:"delete"},
            to:userEmail,
            date:selectedDate
        }).sort({id:-1});
        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const getAssignTask = async (request, response) => {
    const userEmail=request.body.email
    const selectedDate=request.body.date
    try {
        const todos=await Todo.find({to:{$ne:userEmail},status:{$ne:"delete"},
            by:userEmail,
            date:selectedDate
        }).sort({id:-1});
        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const getAllUsers = async (request, response) => {
    try {
        const users=await User.find({}).select('email');
        return response.status(200).json(users);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const toggleTask = async (request, response) => {
    try {
        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            {status:request.body.status}
        )
        await todo.save();
        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const updateTodo= async (request, response) => {
    try {
        await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        );
        const todo = await Todo.findById(request.params.id);
        console.log(todo)
        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
};

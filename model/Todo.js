import mongoose from "mongoose";
import autoIncrementModelID from './Counter.js';
const TodoSchema = new mongoose.Schema({
    id:{type:Number,unique:true,min:1},
    data: {
        type: String,
        required:true 
    },
    status:String,
    date:String,
    createdAt:{
     type:Date,
     default:new Date().toDateString()
    },
    to:String,
    by:String,
    delete:{
        type:Boolean,
        default:false
    }    
});
TodoSchema.pre('save', function (next){
    if (!this.isNew) {
      next();
      return;
    }
    autoIncrementModelID('activities', this, next);
});
const todo = mongoose.model('todo', TodoSchema);
export default todo;
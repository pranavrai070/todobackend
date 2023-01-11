import mongoose from "mongoose";

let validateEmail=function(email){
  let emailRegex = new RegExp("([!#-'+/-9=?A-Z^-~-]+(\.[!#-'+/-9=?A-Z^-~-]+)|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'+/-9=?A-Z^-~-]+(\.[!#-'+/-9=?A-Z^-~-]+)|\[[\t -Z^-~]*])");
  return emailRegex.test(email);
};


// let validatePassword=function(password){
//   let passwordRegex=/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/
//   return passwordRegex.test(password);
// }


const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: 
  { type: String,
    required:"Email address is required",
    trim:true,
    unique:true,
    validate:[validateEmail,'Please fill a valid email address'],
    match:[new RegExp("([!#-'+/-9=?A-Z^-~-]+(\.[!#-'+/-9=?A-Z^-~-]+)|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'+/-9=?A-Z^-~-]+(\.[!#-'+/-9=?A-Z^-~-]+)|\[[\t -Z^-~]*])")]
    },
  password: 
  { type: String,
   required: true
   },
   securityQuestion:{
    type:String
   },
   securityAnswer:{
    type:String
   },
  id: { type: String },
});

const user=mongoose.model("User", userSchema);
export default user;
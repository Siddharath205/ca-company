const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://siddharathmishra3_db_user:yveTabNuuIiBwvFw@cluster0.j2nr8qf.mongodb.net/testdb').then(()=>{
    console.log('database connected ');
    
})
const userschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
}) 
module.exports=mongoose.model('user',userschema)
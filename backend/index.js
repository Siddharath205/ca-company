const express = require('express'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const data = express();
const dotenv = require('dotenv')
require('dotenv').config()
const monogoose = require('mongoose');
const userschema = require('./models/user')

// get post put delete, CRUD = create read update delete

// data.get('/', (req, res)=>{
//     console.log('get route !!!!!');
//     res.send('get route example ');
    
// }); // path, middleware, logic

// data.post('/post', (req, res)=>{
//     console.log('post route !!!!!');
//     res.send('post route example ');
    
// });

// data.put('/put' , (req, res)=>{
//     console.log('put route ---');
//     res.send('put route example ----');
// });

// data.delete('/delete', (req, res)=>{
//     console.log('delete route !!!!!');
//     res.send('delete route example ');
    
// });
// //hashed password $2b$10$AMg8oTQPsVRRQ8SwHMGedegTClzH5aR27oarYJiW5romcY1WINwAi

// //registration 
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash('anuj', salt, function(err, hash) {
        console.log('hashed password',hash)
    });
});


// bcrypt.compare('anuj', '$2b$10$AMg8oTQPsVRRQ8SwHMGedegTClzH5aR27oarYJiW5romcY1WINwAi', function(err, result) {
//    console.log('correct',result)
   
// });
// const hello = jwt.sign({
//   data: '123'
// }, process.env.SECRETKEY);
// console.log('jwt encode',hello);

var decoded = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMTIzIiwiaWF0IjoxNzY5NjY4Mjk0fQ.DrGCflFIOkfg2V4izZ4rbHg29KyWyEueVYaBQGluwrg', '1234');
console.log('jwt decoded',decoded);

data.post('/post',async (req,res)=>{
    const user = await userschema.create({
        name:'Sidddharath',
        email:'Siddharath@gmail.com',
        password:'q1w2e3r4'
    })
    await user.save();
    res.send('data compeated',user)
    console.log(user);
    
})


data.listen(process.env.PORT,() =>{
    console.log('server is running ......');
});
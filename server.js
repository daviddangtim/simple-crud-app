// Important Imports
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Get request and response from server
app.get('/',(req, res) => {
    res.send("Hello from Node API Updated");
});
// Mongoose connection to MongoDb server
mongoose.connect("mongodb+srv://daviddangtim:crudbackend@cluster0.u5drsmj.mongodb.net/CRUD-API(NODE)?retryWrites=true&w=majority")
// runs this code after a successful connection  
.then(() => {
    console.log('Connected!');
    // Listens to check that the app is on the right port
    app.listen(3000, function () {
        console.log('Server running on port 3000!');
    });
})
// Catch if connection failes
.catch(function (){
    console.log("Connection failed");
})


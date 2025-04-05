const http = require("http")
const fs = require('fs')
const port = 8000; 

const mangoose = require('mongoose');

mangoose.connect("mongodb+srv://8hangliu8:yAcBBq7KOd7JEHvA@marihacks.okava7g.mongodb.net/?retryWrites=true&w=majority&appName=marihacks");


const User = require('./user/username')

async function insert() {
    await User.create({
        name: "hang", 
        email: "hello@gmail.com"
    })
}
insert();

const server = http.createServer(function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'})

    res.write("hello World")
    res.end();
    fs.readFile('index.html', function(err, data){
        if(error) {
            res.writeHead(404, { 'Error': 'File not found'})
        }else{
            res.write(data)
        }
        res.end()
    })

});

server.listen(port, function(error) {
    if (error) {
        console.log("Somthing went wrong", error)
    }else{
        console.log("Server is listening on port " + port)
    }
})


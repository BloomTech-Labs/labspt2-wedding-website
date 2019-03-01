require('dotenv').config();

const server = require('./Api/server');
const Port = proccess.env.PORT || 3700;

server.listen(Port, ()=>{
    console.log(`Port trucking on ${Port}`)
});
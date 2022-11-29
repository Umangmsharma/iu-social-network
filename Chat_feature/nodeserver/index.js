// Node server for handling Socket IO connections
const io = require('socket.io')(8080)

const users = {}

io.on('connection', socket =>{
    socket.on('new-user-joined', name =>{
        console.log(name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message =>{
        console.log(message);
        socket.broadcast.emit('receive', {message: message, name: users[socket.id]});
    });

    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });

})
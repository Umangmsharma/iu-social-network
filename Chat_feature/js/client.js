const socket = io('http://localhost:8080/', { transports : ['websocket'] });

const form = document.getElementById("send-container");
var messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");

const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(messageInput);
    console.log(messageInput.nodeName, messageInput.nodeType, messageInput.value);
    var message = messageInput.value;
    console.log(message);
    append(`You: ${message}`, 'right');
    socket.emit('send', message);  
    messageInput.value = ''; 
})
const name = prompt("Enter your name to join");
socket.emit('new-user-joined', name);

socket.on('user-joined', name =>{
    append(`${name} joined the chat`, 'left');
})

socket.on('receive', data =>{
    append(`${data.name}: ${data.message}`, 'left');
})

socket.on('left', name =>{
    append(`${data.name} went offline`, 'left');
})
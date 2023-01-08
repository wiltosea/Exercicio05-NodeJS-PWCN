import { Socket } from "socket.io";

const messageForm = document.getElementById('comment-form');

messageForm.onsubmit = function(event) {
  event.preventDefault();
  const author = document.getElementById('author').value;
  const comment = document.getElementById('comment').value;
  const data = {author,comment};

  Socket.emit('sendMessage', data);
}

const messagesList = document.getElementById('messages');
const renderMessage = (message) => {
    const element = document.createElement('li');
    element.innerHTML = `<strong>${message.author}</strong>: ${message.comment}`;
    messagesList.append(element);
}
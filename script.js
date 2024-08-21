document.addEventListener("DOMContentLoaded", () => {
    // Connect to the Socket.IO server at the specific namespace
    const socket = io('http://localhost:2020/orders');

    // Handle connection
    socket.on('connect', () => {
        console.log('Connected to the server');
        addMessage('Connected to the server');
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('Disconnected from the server');
        addMessage('Disconnected from the server');
    });

    // Handle 'retailer-order' events from the server
    socket.on('retailer-order', (data) => {
        console.log('Delivery order data from server:', data);
        addMessage(`Delivery order data from server: ${JSON.stringify(data)}`);
    });

    // Function to add messages to the DOM
    function addMessage(message) {
        const messagesDiv = document.getElementById('messages');
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messagesDiv.appendChild(messageElement);
    }
});

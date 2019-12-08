document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#volver').onclick = () => {
        localStorage.setItem('channel', 'home')
    }
    console.log("conectado")
    // Connect to websocket
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port);
    // When connected, configure buttons
    socket.on('connect', () => {

        document.querySelector('#boton').onclick = () => {
            const loli = document.querySelector('#msg').value;
            console.log(loli);
            console.log(channel)
            socket.emit('send message', { 'mensaje': loli, 'channel': channel, 'username': localStorage.getItem('register'), 'date': new Date() });
        }
    });

    // When a new message is announced, add to the unordered list
    socket.on('new message', data => {
        
        console.log(data)
        console.log(channel)
        if (channel == data.channel) {
            const li = document.createElement('li');
            li.innerHTML = `${data.date}  ${data.username} : ${data.mensaje}`;
            li.className = "list-group-item"
            document.querySelector('#mensajes').append(li);
            console.log("mensaje enviado")
            var count = document.getElementsByTagName('li').length;
            if (count >= 15) {
                var tester = document.getElementById('mensajes')
                tester.removeChild(tester.childNodes[0])
            }
        }
    });
});

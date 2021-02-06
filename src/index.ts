import app from './app';
import { startConnection } from './database';
import { createServer } from 'http';

async function main() {
    startConnection();

    const http = require('http').createServer(app);

    console.log('Server on port ', app.get('port'));
    
    // const io = require("socket.io").listen(server);
    
    // io.set('origins', '*:*');
    
    var allowedOrigins = "http://localhost:* http://127.0.0.1:*";
    // var path = '/'; // you need this if you want to connect to something other than the default socket.io path
    
    // const io = require("socket.io")(http, {
    //     cors: {
    //       origin: '*',
    //     }
    //   });

    const io = require("socket.io")(http, { origins: '*:*'});
    
    // io.on('connect', (socket: any) => {
    //     console.log('Connected client on port %s.', app.get('port'));
    //     socket.on('message', (m: any) => {
    //         console.log('[server](message): %s', JSON.stringify(m));
    //         io.emit('message', m);
    //     });
    //     socket.on('disconnect', () => {
    //         console.log('Client disconnected');
    //     });
    // });

    io.on('connect', (socket: any) => {
        console.log('Connected client');
        
        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });

    await http.listen(app.get('port'));
}

main();

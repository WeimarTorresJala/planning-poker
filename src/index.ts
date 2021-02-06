import app from './app';
import { startConnection } from './database';
import { createServer } from 'http';

async function main() {
    startConnection();

    const http = require('http').createServer(app);

    console.log('Server on port ', app.get('port'));

    const io = require("socket.io").listen(http, { origins: '*:*' });

    io.on("connect", (socket: any) => {
        socket.on("update", (m: string) => {
            io.emit("update", m);
        });

        socket.on("disconnect", () => {
        });
    });

    await http.listen(app.get('port'));
}

main();

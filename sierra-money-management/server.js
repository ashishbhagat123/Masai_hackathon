const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
// const port = process.env.PORT || 4001;
const moment = require("moment");
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: '*',
    }
  });
const next = require("next")


const dev = process.env.NODE.ENV !== "production"
const nextApp = next({dev})
const nextHandler = nextApp.getRequestHandler()

let port = 3000

let users = [];

io.on("connect", socket => {
    // io.on("connection", (socket) => {
        socket.on("login", (userName) => {
            users.push({ id: socket.id, userName: userName, connectionTime: new moment().format("YYYY-MM-DD HH:mm:ss") });
            socket.emit("connecteduser", JSON.stringify(users[users.length - 1]));
            io.emit("users", JSON.stringify(users));
        });

        socket.on("sendMsg", msgTo => {
            msgTo = JSON.parse(msgTo);
            const minutes = new Date().getMinutes();
            io.emit("getMsg",
                JSON.stringify({
                    id: socket.id,
                    userName: users.find(e => e.id == msgTo.id).userName,
                    msg: msgTo.msg,
                    time: new Date().getHours() + ":" + (minutes < 10 ? "0" + minutes : minutes)
                }));
        });
        socket.once("disconnect", () => {
            let index = -1;
            if (users.length >= 0) {
                index = users.findIndex(e => e.id == socket.id);
            }
            if (index >= 0)
                users.splice(index, 1);
            io.emit("users", JSON.stringify(users));
        });
    });
// })

nextApp.prepare().then(() => {
    app.get('*', (req,res) => {
        return nextHandler(req,res)
    })


server.listen(port, (err) => {
    if(err) throw err
    console.log(`Listening on port ${port}`)
    })

})



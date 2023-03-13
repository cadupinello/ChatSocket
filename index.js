import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = http.createServer(app);
const io = new Server(server)

io.on('connection', socket => {
  
  /*socket.on('disconnect', () => {
    console.log('user disconnected');
  });*/

  socket.on('mensagem', (data) => {
    io.emit("showmsg", data);
    console.log(data);
  })

  socket.on('showmsg2', (data) => {
    io.emit("showmsg2", data);
    console.log(data);
  })
   
  
})


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})

server.listen(3000, () => {
  console.log('listening on *:3000');
})

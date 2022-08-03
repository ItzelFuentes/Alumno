const express= require ('express');
const mysql = require ('mysql');
const myConnection = require ('express-myconnection');

const alumrouter = require('../src/routers/alumnos-router');

const app = express();
app.set('port',  3000);

app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'1234',
    port:3306,
    database: 'alumno'
},'single'));

app.use (express.json());

app.get('/', (req, res)=>{
    res.send('Bienvenido')
})
app.use('/alumno', alumrouter)

//correr el servidor
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'))
});

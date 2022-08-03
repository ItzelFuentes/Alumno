const express = require('express')
const alumrouter = express.Router()

//Consultar todos los alumnos
alumrouter.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM alumno', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        });
    });
});

//Consultar por id del alumno
alumrouter.get('/:_id', (req, res)=>{
    req.getConnection((err,conn) =>{
        conn.query('SELECT * FROM alumno WHERE _id = ?', [req.params._id],(err,rows) => {
            res.json(rows);
        });
    });
 });

//Agregar un alumno
 alumrouter.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO alumno set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Alumno agregado')
        });
    });
});

//Eliminar un alumno 
alumrouter.delete('/:_id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM alumno WHERE _id = ?', [req.params._id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Alumno eliminado')
        });
    });
});

//Actualizar datos de un alumno
alumrouter.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE alumno set ? WHERE _id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('Alumno actualizado')
        });
    });
});


module.exports = alumrouter;

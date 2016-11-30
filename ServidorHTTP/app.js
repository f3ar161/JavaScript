var express = require('express');
var app = express();
var puerto= 5050;


var usuarios = [{id:1,nombre:'Angel',cedula: '050308737'},
                {id:2,nombre:'cris',cedula: '05030873'},
                {id:3,nombre:'Monica',cedula: '0503087234'}];

var contador=3;

//los dos puntos indican que es un parametro
app.get('/Usuarios/:idUsuario', function (req, res) {
    var idActual = req.params.idUsuario;
    for ( var i = 0;i<=usuarios.length;i++){
        if(idActual== usuarios[i].id){
            res.json(usuarios[i]);
        }
    }
    
    res.send('No existe usuario');
});

app.get('/Usuario', function (req, res) {

    res.json(usuarios);
    
});


//http://localhost:5050/Usuario?nombre=angel&cedula=0503087371
app.post('/Usuario', function (req, res) {
    
    console.log(req.query.nombre);
    console.log(req.query.cedula);
    if(!req.query.nombre){
        res.send('No envio nombre');
    }
    
    if(!req.query.cedula){
        res.send('No envio cedula');
    }
    
    var nuevoUsuario ={
        id: contador+1,
        nombre:req.query.nombre,
        cedula:req.query.cedula}
    
    usuarios.push(nuevoUsuario);
    contador=contador+1;
    
    
    res.json(nuevoUsuario);
    

});

app.post('/TecnologiasWeb', function (req, res) {
    
    var usuario = {
        nombre: 'Angel Molina',
        cedula: 0503087371
        
    }
    usuario.apellido = 'Molina';
    usuario.mascotas=[gato={nombre: 'mirana'}];
    usuario.casado= false;
    
    res.append('token','1234');

    var parametros = req.params;
    
    console.log(parametros);
    
    //console.log('lo que tengo en el request');
    //console.log(req);
    //console.log('lo que tengo en el respond');
    //console.log(res);
    //console.log('cabecera request');
    //console.log(req.headers);
    //console.log('cabecera respond');
    //console.log(res.headers);
    //no se puede responder dos veces 
    
//    res.send('Hola post')
    res.json(usuario);
});


app.get('/TecnologiasWeb', function (req, res) {
  res.send('Hello World!');
});

app.put('/TecnologiasWebPut', function (req, res) {
  res.send('Hola put');
});

//request req
//respond res
app.listen(puerto, function () {
  console.log('Example app listening on port 5050!');
});
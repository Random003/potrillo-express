const chalk = require('chalk');

const express = require('express');
const app = express();

app.listen(3000, () => console.log(chalk.redBright("ENSERIO QUERES SABER SOBRE EL POTRILLO???, pone en el navegador esto: localhost:3000. Cuando quieras preguntar mas cosas agregale despues de la direccion / mas tu pregunta sin espacios")));


app.get("/", function(req, res){
res.send("BIENVENIDOS A LA PAGINA DE PREGUNTAS SOBRE EL POTRILLO")
});

app.get("/esmacho", function(req, res){
res.send("EL POTRILLO ES MACHO!")
});

app.get("/esparientedecelestecid", function(req, res){
res.send("EL POTRILLO NO ES PARIENTE DE CELESTE CID!, aveces se cree que si pero en realidad esta comprobado cientificamente que no es pariente de Celeste Cid")
});

app.get("/germanesblasfemo", function(req, res){
res.send("EL GORILA ES UN BLASFEMO AUNQUE NO TE DES CUENTA PORQUE ES MUY BUENO OCULTANDOLO")
});    

app.get("/quiensoy", function(req, res){
res.send("SI NO SOS EL BABART ME ESTARIA PREOCUPANDO.....")
});
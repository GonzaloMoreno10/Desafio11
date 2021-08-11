const express = require("express");
const path = require("path");
const exphbs = require('express-handlebars');
const Handlebars  =  require('handlebars') ;
const {allowInsecurePrototypeAccess}  =  require ( '@handlebars/allow-prototype-access' );
//Inicializaciones
const app = express();

const publicPath = path.resolve(__dirname, '../public');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(publicPath));


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

app.use("/api/productos",require("./productosController"));


//Listen
app.listen(8080,(req,res)=>{
    console.log("Servidor escuchando en el puerto 8080");
})
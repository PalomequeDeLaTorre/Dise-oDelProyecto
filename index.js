var express=require("express");
var path=require("path");

var rutasUsuarios=require("./rutas/usuarios");

var app=express();
app.set("view engine", "ejs");
app.use("/web", express.static(path.join(__dirname, "/web")));
app.use("/",rutasUsuarios);

    app.listen(3000, ()=>{
    console.log('Servidor en http://localhost:3000:');
});
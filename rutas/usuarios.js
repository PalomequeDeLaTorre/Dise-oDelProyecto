var rutas=require("express").Router();

rutas.get("/",(req,res)=>{
    res.render("index");
})

rutas.get("/inicio",(req,res)=>{
    res.render("inicio");
})

rutas.get("/contactanos",(req,res)=>{
    res.send("Contactanos");
});

rutas.get("/acceder",(req,res)=>{
    res.render("acceder");
});

rutas.post("/validar", (req, res)=>{
    if(req.body.usuario=="admin" && req.body.password=="admin"){
        req.session.usuario=req.body.usuario;
        res.redirect("/bienvenido");
    }
    else{
        res.redirect("/error");
    }
});

rutas.get("/accederMedico",(req,res)=>{
    res.render("accederMedico");
})

rutas.get("/accederPaciente",(req,res)=>{
    res.render("accederPaciente");
})

module.exports=rutas;
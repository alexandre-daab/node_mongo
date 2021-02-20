module.exports = (app) => {
    app.get("/", (req, res)=>{
        res.send("Sistema POC para apresentação de dominio de conceitos");
    });

    app.get("/api", (req, res)=>{
        res.send("Sistema POC para apresentação de dominio de conceitos");
    });


}
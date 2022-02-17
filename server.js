const express = require("express");
const app = express();
const mdw = require("./middlewares/middlewares");   
const personas = require("./routes/apiPersonas");
const cors = require("cors");
const corsOptions = { origin: "*", optionSucessStatus: 200 };


//middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/Personas", personas);
app.use(mdw.rutaNoImplementada);


//settings

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), ()=> console.log(`Api corriendo en puerto ${app.get("port")}`));
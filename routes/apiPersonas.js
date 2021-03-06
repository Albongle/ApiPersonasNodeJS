const express = require("express");
const router = express.Router();
const persona = require("../modules/persona");
const servicePersonas = new persona();

router.get("/",(req, res)=>{

    res.status(200).json({status:"ok",data:servicePersonas.getPersonas()});

})

router.get("/:id",(req,res)=>{
    let {id} = req.params;
    id = parseInt(id);
    let obj = servicePersonas.getPersonaById(id);
    obj != null ? res.status(200).json({status:"ok",data:obj}): res.status(400).json({error:'Persona no encontrada'});
});

router.post("/",(req,res)=>{
    let obj = {...req.body};
    let objRetorno = servicePersonas.setNewPersona(obj);
    
    if(objRetorno!=null){
        res.status(200).json({status:"ok",data:obj});
    }else{
        res.status(406).json({error:'Error en la carga de la Persona'});
    }
});


module.exports = router;
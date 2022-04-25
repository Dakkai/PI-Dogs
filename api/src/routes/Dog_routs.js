const { Router } = require("express");
const router = Router();
const { Dog ,Temperamento } = require("../db");
const axios = require('axios');
const { GetDbInfo, GetapiInfo, GetDbTemperament } = require("./controllers")

router.get("/", async (req,res,next)=>{
    const name = req.query.name
    const apiInfo = await GetapiInfo()
    const DbInfo = await GetDbInfo()
    const TotalInfo = DbInfo.concat(apiInfo)

    try {
        if(!name){
            res.send(TotalInfo)
        }else{
            let dogsFilter = await TotalInfo.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
            res.send(dogsFilter)
        }
        
    } catch (error) {
        next(error)
    }
})

router.get("/:idraza", async (req,res,next)=>{
    const {idraza} = req.params

    const apiInfo = await GetapiInfo()
    const DbInfo = await GetDbInfo()
    const TotalInfo = DbInfo.concat(apiInfo)
    try {
        let dogsFilter = await TotalInfo.filter(dog => dog.id == idraza);
        if(!dogsFilter.length){
            res.status(404).send("no se encontro el id")
        }
        else{
            res.send(dogsFilter)
        } 
        
        
    } catch (error) {
        next(error)
    }



})

router.post("/", async (req,res,next)=>{
    const {
        name,
        pesoMin,
        pesoMax,
        AlturaMin,
        AlturaMax,
        img,
        life_span,
        temperamentos,
        Indb
    } = req.body
    const createdDog = await Dog.create({
        name,
        pesoMin,
        pesoMax,
        AlturaMax,
        AlturaMin,
        life_span,
        img,
        Indb
    })
    temperamentos.map(async el => createdDog.addTemperamento( await Temperamento.findOne({
        where:{nombre : el}
    })))


    res.send("creado")
})


module.exports = router;
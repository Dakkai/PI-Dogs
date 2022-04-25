const { Router } = require("express");
const router = Router();
const { Dog ,Temperamento } = require("../db");
const axios = require('axios');
const { GetDbInfo, GetapiInfo} = require("./controllers")

router.get("/", async (req,res,next)=>{
    try {
        res.send(await Temperamento.findAll())
        
    } catch (error) {
        next(error)
    }
  })
  

  module.exports = router
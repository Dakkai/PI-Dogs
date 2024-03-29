const axios = require("axios");
const {Dog, Temperamento} = require("../db")


module.exports = {
  GetapiInfo: async () => {
    const ApiGet = await axios.get("https://api.thedogapi.com/v1/breeds");
    let dogs = ApiGet.data;
    const dogsmap = dogs.map((dog) => {
      const Edad = dog.life_span.split("y")[0]
      const Peso = dog.weight.metric.split("-");
      const Altura = dog.height.metric.split("-");
      const temperament = dog.temperament ? dog.temperament.split(",").map(temp => temp.trim()) : null;
      return {
        id: dog.id,
        name: dog.name.toLowerCase(),
        pesoMin: parseInt(Peso[0]),
        pesoMax: parseInt(Peso[1]),
        alturaMin: parseInt(Altura[0]),
        alturaMax: parseInt(Altura[1]),
        img: dog.image.url,
        life_span: Edad,
        Temperamentos: temperament,
        In : "API"
      };
    });
    return dogsmap;},


  GetDbInfo: async (search) => {
    const Dbget = await Dog.findAll({
      include: {
        model: Temperamento,
        atributes: ["nombre","id"],
      },
    })
    const DogsDB = Dbget.map(dog=> {
     let temps = dog.Temperamentos.map(temp=> {return temp.nombre})
      return{
        id: dog.id,
        name: dog.name.toLowerCase(),
        pesoMin: dog.pesoMin,
        pesoMax: dog.pesoMax,
        alturaMin: dog.alturaMin,
        alturaMax: dog.alturaMax,
        img: dog.img,
        life_span: dog.life_span,
        In: "DB",
        Temperamentos: temps

      }
    })
    
  
    return DogsDB
  },

};


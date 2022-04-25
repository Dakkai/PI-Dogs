const axios = require("axios");
const {Dog, Temperamento} = require("../db")


module.exports = {
  GetapiInfo: async () => {
    const ApiGet = await axios.get("https://api.thedogapi.com/v1/breeds");
    let dogs = ApiGet.data;
    const dogsmap = dogs.map((dog) => {
      // const Edad = dog.life_span.split("y")[0].split("-")
      const Peso = dog.weight.metric.split("-");
      const Altura = dog.height.metric.split("-");
      const temperament = dog.temperament ? dog.temperament.split(",") : null;
      return {
        id: dog.id,
        name: dog.name,
        pesoMin: Peso[0],
        pesoMax: Peso[1],
        alturamin: Altura[0],
        alturamax: Altura[1],
        imagen: dog.image.url,
        life_span: dog.life_span,
        temperamento: temperament,
        InDB : false
      };
    });
    return dogsmap;},


  GetDbInfo: async (search) => {
    const Dbget = await Dog.findAll({
      include: {
        model: Temperamento,
        atributes: ["nombre"],
        through: { attributes: [] },
      },
    })
    return Dbget
  },

};
// nopmbre temperamento peso imagen altura años de vida id

// const GetapiInfo = async ()=>{
//     const ApiGet = await axios.get("https://api.thedogapi.com/v1/breeds")
//     const ApiData = await ApiGet.data
//     console.log(ApiData)
// }
// GetapiInfo()

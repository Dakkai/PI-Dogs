//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const axios = require('axios');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Temperamento } = require("../api/src/db");

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  const ApiGet = await axios.get("https://api.thedogapi.com/v1/breeds");
  let dogs = ApiGet.data;
  let dogsmap = dogs.map((dog) => {
    const temperament = dog.temperament ? dog.temperament.split(",") : null;
  return temperament
  
  });
  dogsmap = dogsmap.flat(Infinity)
  dogsmap = dogsmap.filter(el=> el !== null)
  dogsmap = dogsmap.map(el => el.trim())
  const temperamentos =new Set(dogsmap)
  temperamentos.forEach(el=> Temperamento.findOrCreate({
      where: {
          nombre: el
      }
  }))
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

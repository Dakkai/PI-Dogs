import axios from "axios";

export async function createDog(data) {
  console.log(data)
  return await axios.post("http://localhost:3001/dogs", {
    name: data.name,
    pesoMax: parseInt(data.pesoMax),
    pesoMin: parseInt(data.pesoMin),
    alturaMin: parseInt(data.alturaMin),
    alturaMax: parseInt(data.alturaMax),
    img: data.img,
    life_span: data.life_span ,
    temperamentos: data.temperamento,
  });
}

export function validations(data) {
  const error = {};
  //nombre
  if (data.name.length === 0) {
    error.name = "el nombre es requerido";
  }
  if (data.name.length !== 0) {
    if (!/^[a-zñ A-ZÑ]+$/.test(data.name)) {
      error.name = "Nombre no valido";
    }
  }
  //altura
  if (!data.alturaMax) {
    error.alturaMax = "la altura es requerida";
  }
  if (!data.alturaMin) {
    error.alturaMin = "la altura es requerida";
  }
  if (parseInt(data.alturaMax) <= parseInt(data.alturaMin)) {
    error.alturaMax =
      "la altura maxima no puede ser menor nu igual a la minima";
  }
  if (parseInt(data.alturaMin) >= parseInt(data.alturaMax)) {
    error.alturaMin =
      "la altura minima no puede ser mayor ni igual a la maxima";
  }
  //peso
  if (!data.pesoMax) {
    error.pesoMax = "el peso es requerido";
  }
  if (!data.pesoMin) {
    error.pesoMin = "el peso es requerido";
  }
  if (parseInt(data.pesoMax) <= parseInt(data.pesoMin)) {
    error.pesoMax = "el peso maximo no puede ser menor ni igual al minimo";
  }
  if (parseInt(data.pesoMin) >= parseInt(data.pesoMax)) {
    error.pesoMin = "el peso minimo no puede ser mayor ni igual al maximo";
  }
  // life-span
  if (data.life_span !== 0)
    if (!/\d*\s[-]\s\d*/.test(data.life_span)) {
      error.life_span = "formato no valido";
    }
  //temperamento
  if (data.temperamento.length === 0) {
    error.temperamento = "debe añardir al menos dos temperamentos";
  }
  return error;
}

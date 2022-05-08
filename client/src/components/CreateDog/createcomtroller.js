import axios from "axios";

export async function createDog(data) {
  return await axios.post("/dogs", {
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
  if (!data.alturaMax || data.alturaMax <= 0) {
    error.alturaMax = "la altura es requerida";
  }
  if (!data.alturaMin || data.alturaMin <= 0) {
    error.alturaMin = "la altura es requerida";
  }
  if (parseInt(data.alturaMax) <= parseInt(data.alturaMin)) {
    error.alturaMax =
      "la altura maxima no puede ser menor o igual a la minima";
  }
  if (parseInt(data.alturaMin) >= parseInt(data.alturaMax)) {
    error.alturaMin =
      "la altura minima no puede ser mayor o igual a la maxima";
  }
  //peso
  if (!data.pesoMax || data.pesoMax <= 0) {
    error.pesoMax = "el peso es requerido";
  }
  if (!data.pesoMin || data.pesoMin <= 0 ) {
    error.pesoMin = "el peso es requerido";
  }
  if (parseInt(data.pesoMax) <= parseInt(data.pesoMin)) {
    error.pesoMax = "el peso maximo no puede ser menor o igual al minimo";
  }
  if (parseInt(data.pesoMin) >= parseInt(data.pesoMax)) {
    error.pesoMin = "el peso minimo no puede ser mayor o igual al maximo";
  }
  // life-span
  if (data.life_span !== 0)
    if (!/^\d+\s[-]\s\d+$/.test(data.life_span)) {
      error.life_span = "formato no valido";
    }
  //temperamento
  if (data.temperamento.length <= 1) {
    error.temperamento = "debe añardir al menos dos temperamentos";
  }
  return error;
}

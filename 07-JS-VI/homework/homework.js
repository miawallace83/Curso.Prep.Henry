// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
  
  cb();

}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  var sumar = numeros.reduce(function(primero, segundo) {
    return primero + segundo;
  }, 0);
  cb(sumar);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  for (var i = 0; i < array.length; i++) {
    cb(array[i]);
  }

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  var nuevoArr = array.map(function(prueba) {
    return cb (prueba)
  });
   return nuevoArr;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};

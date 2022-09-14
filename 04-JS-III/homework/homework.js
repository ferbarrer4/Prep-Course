// No cambies los nombres de las funciones.

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  // un array es una caja [] en la cual contiene elemetons pueden ser [2, "sfakja", true] "strings" booleano
  // clave/key                                                         0      1       2
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  // array.length cuenta cuantos elementos hay. === 3
  // [array.length -1] array.length representa la cantidad de elementos que encontramos
  // - 1 es la clave para restar la cantidad de elemento selecionado
  return array[array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // [1, 6, 8, 503] = i=0, i++ hace que incremente por lo tanto ya no es 0 es 1
  // for(var i = 0; i < array.length; i++)
  // push: agrega y incrementa su longitud en 1.
  var arrayIncrementado = [];
  for(var i = 0; i < array.length; i++){
    arrayIncrementado.push(array[i]+1)
  }
  return arrayIncrementado;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  // var array =["audi", "ferrari", "lambo"]
  // var elemento ="jeep" 
  // con .push añade el elemento en el ultimo array
  array[array.length] = elemento;
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  // var array =["audi", "ferrari", "lambo"]
  // var elemento ="jeep" 
  // con .unshift añade el elemento en el pricipio del array

  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  // .join(' ') nos recibe como argumento que queremos que haya en el mendio en el elemento
  // para juntar ['Hello', 'world!'] -> 'Hello world!'
  return palabras.join(' ');
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i=0; i < array.length; i++){
    if(array[i] === elemento)
    return true;
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let acumulador = 0;
  for(let i = 0; i < numero.lengthi; i++){
    acumulador += numeros[i];
  }
  return acumulador;

}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  // restudatods [9, 8, 7]   24/3=PROMEDIO
  var acumulador = 0;
  for(var i = 0; i < resultadosTest.length; i++) {
   acumulador += resultadosTest[i]
  }
  return acumulador / resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let cajita = [0];
  for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > cajita){
      cajita = numeros[i];
    }
  }
  return cajita;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let acumulador = 1;
  if(arguments.length === 0){
    return 0;
  }
  else if(arguments.length === 1){
    return arguments[0];
  }
  else{
    for(let i = 0; i < arguments.length; i++){
      acumulador = acumulador * arguments[i]
    }
  }
  return acumulador;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  // array [5, 8, 15, 20, 25]
  // key    0  1   2   3   4
  let contador = 0;
  for (let i = 0; i < arreglo.length ; i++) {
    if(arreglo[i] > 19){
      contador++
    }
  }
  return contador
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  // domingo lunes martes miercoles jueves viernes sabado
  //    1       2     3      4        5       6       7
  if(numeroDeDia === 1 || numeroDeDia === 7 ){
    return "Es fin de semana"
  }
  return "Es dia Laboral"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numeroString = n.toString();
  if(numeroString[0] == 9){
    return true;
  }else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  // arreglo [2,2,2]
  // key      0 1 2 
  // !== no es igual
  for(let i = 0; i < arreglo.length -1; i++){
    if(arreglo[i] !== arreglo[i+1]){
      return false;
    }
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  // [enero,marzo,mayo,julio,agostos,noviembre]
  //    0    1     2     3       4        5  
  let arrayResultado = []; 
  for(let i = 0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      arrayResultado.push(array[i]);
    }
  }
  if(arrayResultado.length === 3){
    return arrayResultado;
  }else{
    return "No se encontraron los meses pedidos"
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] > 100)
      nuevoArray.push(array[i]);
  }
  return nuevoArray;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  // array [5]
  // key=i  0
  //
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    suma = suma + 2;
    if(suma === i) break;
    else {
      array.push(suma);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return array;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

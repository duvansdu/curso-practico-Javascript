// codigo del cuadrado 
console.group("Cuadrado")
//const ladocuadrado = 5;
//(console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm")

function perimetrocuadrado(lado){
   return  lado * 4;
} 

//console.log("El perimetro del cuadrado es: " + perimetrocuadrado + "cm")
function areaCuadrado(lado){
    return lado *lado;
} 
//console.log("El area del cuadrado es: " + areaCuadrado + "cm2")
console.groupEnd();
//
//codigo del Triángulo
console.group("Codigo del triángulo")
//const ladoTriangulo1 = 6
/* const ladoTriangulo2 = 6
const alturaTriangulo = 5.2
const base = 4 */

/* console.log("Los lados del Triángulo miden: " + ladoTriangulo1 
                                              +"," + ladoTriangulo2 
                                              +"," + base + ","
                                              + " altura del triangulo es de " + alturaTriangulo) */

function perimetroTriangulo(lado1, lado2, base){
    total = lado1+lado2+base;
    return  total;
} 
// console.log("El perimetro del triangulo es igual a " + perimetroTriangulo)
function areaTriangulo (base, alturaTriangulo){
    return ((base * alturaTriangulo) /2)
}
// console.log("el area del Triángulo es de: "+ areaTriangulo)
console.groupEnd();
//Código del circulo

console.group("Circulo")
/* const diametro = 5
const radio = 10
const pi = Math.PI
console.log("el diametro del Circulo es de: " + diametro 
                        + " y el radio es de: " + radio ) */
const pi = Math.PI
function perimetroCirculo(diametro){
    return diametro*pi
}
// console.log("El perimetro del circulo es de: " + perimetroCirculo)

function areaCirculo(radio){
    ((radio*radio)*pi)
}
// console.log("El area del Circulo es de: " +areaCirculo)
console.groupEnd();

//Aqui Interactuamos con nuestro Html

function calcularPerimetroCuadrado(){
 const input = document.getElementById("InputCuadrado");
 const value = input.value;

 const perimetro = perimetrocuadrado(value);
 alert(perimetro);


}

function calcularArea(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
   
    const area = areaCuadrado(value);
    alert(area);

}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputLado1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputLado2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputLado3");
    const value3 = input3.value;
    const perimetroTrian = perimetroTriangulo(value1,value2,value3);
    alert(perimetroTrian);

}



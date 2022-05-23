// codigo del cuadrado 
console.group("Cuadrado")
const ladocuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm")
const perimetrocuadrado = ladocuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetrocuadrado + "cm")
const areaCuadrado = ladocuadrado *ladocuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm2")
console.groupEnd();
//
//codigo del Triángulo
console.group("Codigo del triángulo")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const alturaTriangulo = 5.2
const base = 4

console.log("Los lados del Triángulo miden: " + ladoTriangulo1 
                                              +"," + ladoTriangulo2 
                                              +"," + base + ","
                                              + " altura del triangulo es de " + alturaTriangulo)

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+base
console.log("El perimetro del triangulo es igual a " + perimetroTriangulo)
const areaTriangulo = ((base * alturaTriangulo) /2)
console.log("el area del Triángulo es de: "+ areaTriangulo)
console.groupEnd();


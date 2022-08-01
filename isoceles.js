function calcularIsocelesTriangulo(){
    const InputLado1 = document.getElementById("InputLado1")
    const InputLadoA = InputLado1.value;
    const InputLado2= document.getElementById("InputLado2")
    const InputLadoB = InputLado2.value;
    const InputLado3 = document.getElementById("InputLado3")
    const InputLadoC = InputLado3.value;
    if (InputLadoA == InputLadoB || InputLadoA == InputLadoC || InputLadoB == InputLadoC ){
        alert(" Es un Triangulo Isoceles ")
        if (InputLadoA == InputLadoB){
            altura = Math.sqrt(((InputLadoA)*2) -((InputLadoC)*2)/4)
            alert("La altura del triangulo Isoceles es " +altura)
        }
        else if (InputLadoA == InputLadoC){
            altura = Math.sqrt(((InputLadoA)*2) -((InputLadoB)*2)/4)
            alert("La altura del triangulo Isoceles es " +altura)
        }
        if (InputLadoB == InputLadoC){
            altura = Math.sqrt(((InputLadoB)*2) -((InputLadoA)*2)/4)
            alert("La altura del triangulo Isoceles es " +altura)
        }
    }
    else{
        alert("No es un triangulo Isoceles")
    }

}
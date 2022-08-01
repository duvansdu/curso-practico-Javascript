//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento (precio, descuento){
    
const porcentajePrecioConDescuento = 100 -descuento;
const precioConDescuento = (precio *porcentajePrecioConDescuento)/100;
return precioConDescuento;

}

function onClickButtonPriceDiscount(){
    const InputPrice = document.getElementById("InputPrice");
    const priceValue = InputPrice.value;
    const InputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerHTML = "El precio con descuento son : $" + precioConDescuento;
}

// console.log({precioConDescuento,
// precioOriginal,
// descuento,
// porcentajePrecioConDescuento})
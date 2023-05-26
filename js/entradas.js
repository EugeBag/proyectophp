function calcularPrecioFinal(){
    let cantidadEntradas = document.getElementById("cantidadEntradas").value;

    let descuento= document.getElementById("descuento").value;

    let descuentoTotal= (200*cantidadEntradas)*descuento/100;

    let precioFinal= (200*cantidadEntradas)-descuentoTotal;

    document.getElementById("precioFinal").value=precioFinal;

}
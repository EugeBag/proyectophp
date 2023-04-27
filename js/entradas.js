function calcularPrecioFinal(){
    let cantidadEntradas = document.getElementById("cantidadEntradas").value;

    let descuento= document.getElementById("descuento").value;

    let descuentoTotal= (1000*cantidadEntradas)*descuento/100;

    let precioFinal= (1000*cantidadEntradas)-descuentoTotal;

    document.getElementById("precioFinal").value=precioFinal;

}
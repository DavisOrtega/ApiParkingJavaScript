const calcularPrecioAPagar = (tipoVehiculo, cantidadMinutos, tipoCliente) => {
    let valorMinuto;
    switch (tipoVehiculo) {
        case "CARRO":
            valorMinuto = 95;
            break;
        case "MOTO":
            valorMinuto = 49;
            break;
        case "BICI":
            valorMinuto = 10;
            break;
        default:
            return "Tipo de vehículo no válido.";
    }

    let descuento = 0;
    if (tipoCliente === "PREMIUM") {
        descuento = 0.1;
    } else if (tipoCliente !== "STANDAR") {
        return "Tipo de cliente no válido.";
    }

    let precioAPagar;
    if (tipoCliente === "PREMIUM") {
        precioAPagar = valorMinuto * cantidadMinutos * (1 - descuento);
    } else if (tipoCliente === "STANDAR") {
        precioAPagar = valorMinuto * cantidadMinutos;
    }

    return `El precio a pagar es: $${precioAPagar.toFixed(2)}`;
};

const tipoVehiculo = prompt("Ingrese la Tipo de Vehiculo: CARRO/MOTO/BICI").toUpperCase();
const cantidadMinutos = parseFloat(prompt("Ingrese la cantidad de minutos"));
const tipoCliente = prompt("Ingrese el tipo de cliente: PREMIUM/STANDAR").toUpperCase();

const resultado = calcularPrecioAPagar(tipoVehiculo, cantidadMinutos, tipoCliente);
alert(resultado);
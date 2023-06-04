
//------------------------------ PREENTREGA 1-------------------------------------------


// const calcularPrecioAPagar = (tipoVehiculo, cantidadMinutos, tipoCliente) => {
//     let valorMinuto;
//     switch (tipoVehiculo) {
//         case "CARRO":
//             valorMinuto = 95;
//             break;
//         case "MOTO":
//             valorMinuto = 49;
//             break;
//         case "BICI":
//             valorMinuto = 10;
//             break;
//         default:
//             return "Tipo de vehículo no válido.";
//     }

//     let descuento = 0;
//     if (tipoCliente === "PREMIUM") {
//         descuento = 0.1;
//     } else if (tipoCliente !== "STANDAR") {
//         return "Tipo de cliente no válido.";
//     }

//     let precioAPagar;
//     if (tipoCliente === "PREMIUM") {
//         precioAPagar = valorMinuto * cantidadMinutos * (1 - descuento);
//     } else if (tipoCliente === "STANDAR") {
//         precioAPagar = valorMinuto * cantidadMinutos;
//     }

//     return `El precio a pagar es: $${precioAPagar.toFixed(2)}`;
// };

// const tipoVehiculo = prompt("Ingrese la Tipo de Vehiculo: CARRO/MOTO/BICI").toUpperCase();
// const cantidadMinutos = parseFloat(prompt("Ingrese la cantidad de minutos"));
// const tipoCliente = prompt("Ingrese el tipo de cliente: PREMIUM/STANDAR").toUpperCase();

// const resultado = calcularPrecioAPagar(tipoVehiculo, cantidadMinutos, tipoCliente);
// alert(resultado);






//----------------------------------- PREENTREGA 2-----------------------------------------

function gestionarParqueadero() {
    let vehiculos = [];

    function agregarVehiculo() {
        let vehiculo = {};
        vehiculo.tipo = prompt("Ingrese el tipo de vehículo: CARRO/MOTO/BICI").toUpperCase();

        let placaIngresada = false;
        while (!placaIngresada) {
            let numeroPlaca = prompt("Ingrese el número de placa del vehículo:");
            if (numeroPlaca === null) {
                return; // Se canceló el ingreso, se sale de la función sin agregar el vehículo
            }
            if (numeroPlaca.trim() !== "") {
                vehiculo.numeroPlaca = numeroPlaca;
                placaIngresada = true;
            } else {
                alert("Debe ingresar un número de placa válido.");
            }
        }

        vehiculo.horaEntrada = new Date();

        vehiculos.push(vehiculo);

        alert("Vehículo agregado exitosamente.");
    }

    function mostrarVehiculosRegistrados() {
        let mensaje = "Registro de vehículos:\n\n";

        if (vehiculos.length === 0) {
            mensaje += "No hay vehículos registrados.";
        } else {
            vehiculos.forEach(function (vehiculo, index) {
                let tiempoEstacionado = Math.abs(new Date() - vehiculo.horaEntrada); // Calcular el tiempo estacionado en milisegundos
                let minutosEstacionados = Math.ceil(tiempoEstacionado / (1000 * 60)); // Convertir a minutos redondeando hacia arriba

                let valorMinuto;
                switch (vehiculo.tipo) {
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
                        valorMinuto = 0;
                        break;
                }

                let valorAPagar = valorMinuto * minutosEstacionados;

                mensaje += "Vehículo #" + (index + 1) + "\n";
                mensaje += "Tipo: " + vehiculo.tipo + "\n";
                mensaje += "Número de placa: " + vehiculo.numeroPlaca + "\n";
                mensaje += "Hora de entrada: " + vehiculo.horaEntrada + "\n";
                mensaje += "Minutos estacionados: " + minutosEstacionados + "\n";
                mensaje += "Valor a pagar: $" + valorAPagar.toFixed(2) + "\n\n";
            });
        }

        let opcionLimpiar = parseInt(prompt(mensaje + "Seleccione el número de vehículo que desea limpiar:"));

        if (opcionLimpiar > 0 && opcionLimpiar <= vehiculos.length) {
            vehiculos.splice(opcionLimpiar - 1, 1);
            alert("Vehículo limpiado exitosamente.");
        } else if (opcionLimpiar !== 0) {
            alert("Opción no válida.");
        }
    }
    let opcion;

    do {
        opcion = parseInt(prompt("Seleccione una opción:\n1. Agregar vehículo\n2. Registro de vehículos\n3. Salir"));

        switch (opcion) {
            case 1:
                agregarVehiculo();
                break;
            case 2:
                mostrarVehiculosRegistrados();
                break;
            case 3:
                break;
            default:
                alert("Opción no válida.");
                break;
        }
    } while (opcion !== 3);
}

gestionarParqueadero();
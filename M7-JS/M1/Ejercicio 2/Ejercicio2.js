let Ingresos = Number(prompt('Ingrese el monto que tiene de ingreso:'));

let GastosNecesarios=Ingresos*0.5;
let GastosOpcionales=Ingresos*0.3;
let AhorroInversion=Ingresos*0.2;

alert(`El monto dedicado para los gastos necesarios son: ${GastosNecesarios}`);
alert(`El monto dedicado para los gastos opcionales son: ${GastosOpcionales}`);
alert(`El monto dedicado para ahorrar y invertir es de: ${AhorroInversion}`);
let PuntoEquilibrio;

let CostoFijo = Number(prompt('Ingrese el costo fijo:'));
let PrecioVenta = Number(prompt('Ingrese el precio de venta:'));
let CostoVariable = Number(prompt('Ingrese el costo variable:'));

PuntoEquilibrio=(CostoFijo/(PrecioVenta-CostoVariable));
alert(`La cantidad de ventas necesarias para no perder dinero es de: ${PuntoEquilibrio}`);
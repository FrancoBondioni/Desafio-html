const Usuario = prompt('INGRESE SU USUARIO');
const Contrasenia = prompt('INGRESE SU CONTRASEÑA');

const usuarioValido = Usuario === 'admin';
const ContraseniaValida = Number(Contrasenia) === 1234;

if (usuarioValido && ContraseniaValida) {
    alert('Ingreso correcto');
}else {
    //false
    alert('Fallo el ingreso... Ingrese un usuario o contraseña valido.');
}

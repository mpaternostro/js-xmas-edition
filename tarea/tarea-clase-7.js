/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */

const $form = document.formulario;
const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }

    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }
    return '';
}

function validarCiudad(ciudad) {
    if (ciudad === '') {
        return 'No se eligio ninguna ciudad';
    }
    return '';
}

function validarComportamiento(comportamiento) {
    if (comportamiento === '') {
        return 'No se calificó su comportamiento';
    }
    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }
    if (descripcionRegalo.length >= 75){
        return 'Este campo debe tener menos de 75 caracteres';
    }
    return '';
}
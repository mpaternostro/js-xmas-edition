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
const exito = document.querySelector("#exito");

$form.onsubmit = validarFormulario;

function validarFormulario(event) {
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        "descripcion-regalo": validarDescripcionRegalo(descripcionRegalo)
    };

    if (manejarErrores(errores) === "") {
        $form.className = "oculto";
        document.querySelector("#exito").classList.remove("oculto");
        redireccionar();
    };
    event.preventDefault();
}

function redireccionar(){
    const timeout = 5000;
    setTimeout(function(){window.location.href = "wishlist.html";}, timeout);
}

function manejarErrores(errores) {
    let contarErrores = 0;
    const listaErrores = document.querySelector("#errores");
    while(listaErrores.firstChild){
        listaErrores.removeChild(listaErrores.firstChild);
    };
    Object.keys(errores).forEach(function (key) {
        if (errores[key] !== "") {
            const li = document.createElement("li");
            li.innerText = errores[key];
            listaErrores.appendChild(li);
            let llave = document.querySelector(`[name="${key}"]`);
            llave.className = "error";
            llave.value = "";
            contarErrores++;
        } else {
            let llave = document.querySelector(`[name="${key}"]`);
            llave.classList.remove("error");
        }
    });

    if (contarErrores === 0) {
        listaErrores.className = "oculto";
        
        return "";
    }
}

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'El campo nombre debe tener al menos 1 caracter';
    }

    if (nombre.length >= 50) {
        return 'El campo nombre debe tener menos de 50 caracteres';
    }
    if (!/^[a-z]+$/i.test(nombre)) {
        return 'El campo nombre solo puede estar compuesto por letras';
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
        return 'El campo descripción debe tener al menos 1 caracter';
    }
    if (descripcionRegalo.length >= 100) {
        return 'El campo descripción debe tener menos de 100 caracteres';
    }
    if (!/^[a-z0-9 ]+$/i.test(descripcionRegalo)) {
        return 'El campo descripción debe tener solo letras y/o números';
    }
    return '';
}

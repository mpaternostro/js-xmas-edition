function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no pudo validar que el nombre no sea vacío',
    );
    console.assert(
        validarNombre('1111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no pudo validar que el nombre sea menor a 50 caracteres',
    );
    console.assert(
        validarNombre("pedro") === '', 'Validar nombre no pudo validar el nombre ingresado',
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'No se eligio ninguna ciudad',
        'Validar ciudad no pudo validar si se ingreso una ciudad',
    );
    console.assert(
        validarCiudad('Mendoza') === '', 'Validar ciudad no pudo validar correctamente la ciudad ingresada',
    );
}

function probarValidarComportamiento() {
    console.assert(
        validarComportamiento('') === 'No se calificó su comportamiento',
        'Validar comportamiento no pudo validar que no se haya calificado su comportamiento',
    );
    console.assert(
        validarComportamiento('bueno') === '',
        'Validar comportamiento no pudo validar el comportamiento ingresado',
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'Validar descripción regalo no pudo validar que la descripción del regalo no esté vacia',
    );
    console.assert(
        validarDescripcionRegalo(
            'dassdasdandsansdnuodsanodsaoniaosndinodasanjsjdakmadsopsadmsdamasdmopadsmopnsn') ===
        'Este campo debe tener menos de 75 caracteres',
        'Validar descripción regalo no pudo validar que la descripción del regalo sea menor a 75 caracteres'
    );
    console.assert(
        validarDescripcionRegalo('Quiero una manaos de uva') === '',
    'Validar descripción regalo no pudo validar que la descripción regalo sea correcta',
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarComportamiento();
probarValidarDescripcionRegalo();
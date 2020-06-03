const letterDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function validaDNI() {
    console.log('click en comprobar dni');
    var dni = document.getElementsByName("dni")[0].value;
    console.log("DNI introducido: " + dni);

    var dniSoloNum = dni.slice(0, 8); //eliminamos la letra introducida
    console.log("DNI sin la letra: " + dniSoloNum);

    var result = dniSoloNum % 23; //calculamos el resto del dni introducido entre 23 (num de letras)
    console.log('El resultado de ' + dniSoloNum + ' % 23 es: ' + result);

    var letraSeleccionada = letterDni[result]; //segun el resto obtenido buscaremos en el array dicha posicion
    console.log('La letra correspondiente es: ' + letraSeleccionada);
    console.log('Por tanto tu DNI es: ' + dniSoloNum + letraSeleccionada);

    var dniAndLetter = dniSoloNum + letraSeleccionada;
    console.log("El DNI correcto seria: " + dniAndLetter);


    //mostrar datos pantalla
    var nombre = document.getElementsByName("nombre")[0].value;
    var apellidos = document.getElementsByName("apellidos")[0].value;
    document.getElementById("resultNameConApellidos").innerHTML = nombre + " " + apellidos;

    if (dni === dniAndLetter) {
        console.log('Es correcto');
        document.getElementById("resultFormDni").innerHTML = dni + " es correcto";
        document.getElementById("resultFormDni").style.color = "green";
        document.getElementById("resultFormDniQueTocaria").innerHTML = "";
    } else {
        console.log('Es incorrecto');
        document.getElementById("resultFormDni").innerHTML = dni + " es incorrecto!";
        document.getElementById("resultFormDni").style.color = "red";
        document.getElementById("resultFormDniQueTocaria").innerHTML = "El DNI correcto sería: " + dniAndLetter;
    }

};
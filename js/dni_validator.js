const letterDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function validaDNI() {
    console.log('click en comprobar dni');
    var dni = document.getElementsByName("dni")[0].value; //valor del input del dni
    console.log("DNI introducido: " + dni);

    var dniLetter = dni.slice(8); //letra introducida
    var dniLetterMayuscula = dniLetter.toUpperCase(); //letra en mayusculas
    console.log("Letra del dni: " + dniLetter);
    console.log("Longitud dni: " + dni.length);

    //si la longitud del dni es diferente de 9 o la letra no es mayuscula
    if (dni.length != 9 || dniLetter != dniLetterMayuscula) {
        //avisamos al usuario del fallo
        alert("Debe poner 8 números y una letra mayuscula");
        document.getElementById("resultNameConApellidos").innerHTML = "";
        document.getElementById("resultFormDni").innerHTML = "";
        document.getElementById("resultFormDniQueTocaria").innerHTML = "";
        document.getElementsByName("dni")[0].style.border = "2px solid red";
    } else {
        var dniSoloNum = dni.slice(0, 8); //eliminamos la letra introducida
        console.log("DNI sin la letra: " + dniSoloNum);

        var result = dniSoloNum % 23; //calculamos el resto del dni introducido entre 23 (num de letras)
        console.log('El resultado de ' + dniSoloNum + ' % 23 es: ' + result);

        var letraSeleccionada = letterDni[result]; //segun el resto obtenido buscaremos en el array dicha posicion
        console.log('La letra correspondiente es: ' + letraSeleccionada);

        var dniAndLetter = dniSoloNum + letraSeleccionada; //juntamos los 8 digitos con la letra que toca
        console.log("El DNI correcto seria: " + dniAndLetter);


        //mostrar datos pantalla
        var nombre = document.getElementsByName("nombre")[0].value; //valor del input nombre
        var apellidos = document.getElementsByName("apellidos")[0].value; //apellidos
        document.getElementById("resultNameConApellidos").innerHTML = nombre + " " + apellidos;
        document.getElementsByName("dni")[0].style.border = "";

        if (dni === dniAndLetter) { //si el dni introducido es igual que el dni que tocaria con esos digitos
            console.log('Es correcto');
            document.getElementById("resultFormDni").innerHTML = dni + " es correcto";
            document.getElementById("resultFormDni").style.color = "green";
            document.getElementById("resultFormDniQueTocaria").innerHTML = "";
        } else { //caso contrario
            console.log('Es incorrecto');
            document.getElementById("resultFormDni").innerHTML = dni + " es incorrecto!";
            document.getElementById("resultFormDni").style.color = "red";
            document.getElementById("resultFormDniQueTocaria").innerHTML = "El DNI correcto sería: " + dniAndLetter;
        }
    }
};
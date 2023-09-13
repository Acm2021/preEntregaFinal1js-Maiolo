
//Se buscó programar el juego del Ahorcado de manera simple, sin utilizar clases ni objetos.

// Fs menu para comenzar el juego o Salir.

function menu() {
    let opcion = 2;
    do { 

        console.log("Ingrese una opción:"); 
        console.log("1.Comenzar una partida");
        console.log("2.Salir");
        console.log("-----------------------");
        opcion = prompt();
        
        switch (opcion) {
            case "1": palabraADescubrir = comenzarPartida();
                jugar(palabraADescubrir);
                break;
            case "2": console.log("Gracias por jugar");
                break;
            default: console.log("Opción incorrecta");
                break;
        }
    }while (opcion !="2")
    
}


// Fs Comenzar partida, para lo cual se solicita al usuario (idelamente es el usaurio1) que ingrese una palabra a descubrir.

function comenzarPartida() {
    let palabraADescubrir = prompt("Ingrese una palabra a descubrir");
    return palabraADescubrir;

}

// Fs Jugar, un segundo usuario comienza a adivinar las letra, pudiendose equivocar solo 6 veces.

function jugar(palabraADescubrir) {
    let INTENTOS = 6;
    let letrasAdivinadas = 0;
    let palabraDescubierta = [palabraADescubrir.length];
    do {
        letraAAdivinar = prompt("Ingrese la letra a intentar");
        cantidadDeletrasAdivinadasEnEstaRonda=validarLetra(letraAAdivinar, palabraADescubrir,palabraDescubierta);
        if(cantidadDeletrasAdivinadasEnEstaRonda > 0) {
         letrasAdivinadas += cantidadDeletrasAdivinadasEnEstaRonda;
        }
        else {
            INTENTOS -=1;
        }
        
    }while (INTENTOS > 0 && letrasAdivinadas < palabraADescubrir.length)
    if (INTENTOS == 0) {
        console.log("-----------------------");
        console.log("Perdiste");
        
    }
    else {
        console.log("-----------------------");
        console.log("Ganaste");
        
        
    }
    console.log("La palabra era: " + palabraADescubrir);
    console.log("-----------------------");
    console.log("-----------------------");
   

}

function validarLetra(letraAAdivinar, palabraADescubrir,palabraDescubierta) {

    let cantidadLetrasAdivinadas = 0;
    for (let i = 0; i < palabraADescubrir.length; i++) {
        if  (letraAAdivinar === palabraADescubrir[i]) {
            palabraDescubierta[i] = letraAAdivinar;
            cantidadLetrasAdivinadas +=1;
      }      
    }
    console.log(palabraDescubierta);
    return cantidadLetrasAdivinadas;
}



//EJECUCION DEL PROGRAMA
menu();




"use strict"





var pintaUno = 0;

var pintaDos= 0;

var pintaTres=0;




var tiempoTotal = 3000;

var time_vueltaUno = tiempoTotal/ 19;

var miIntervalUno=setInterval(function(){
        
        pintaUno++;


        numeroUno.innerHTML="<h3>"+pintaUno+" %</h3>";

    if( pintaUno>19 ){

        clearInterval(miIntervalUno);

    }

}, time_vueltaUno);


var time_vueltaDos = tiempoTotal/ 50;

var miIntervalDos=setInterval(function(){
  
    pintaDos++;


    numeroDos.innerHTML="<h3>"+pintaDos+" %</h3>";

if( pintaDos>50 ){

    clearInterval(miIntervalDos);

}

},time_vueltaDos);

var time_vueltaTres = tiempoTotal/ 39;

var miIntervalTres=setInterval(function(){
    
    pintaTres++;


    numeroTres.innerHTML="<h3>"+pintaTres+" %</h3>";

if( pintaTres>39 ){

    clearInterval(miIntervalTres);

}

}, time_vueltaTres);  
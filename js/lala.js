var jugar = document.getElementById("jugar");
var jugando = document.getElementById("jugando");
var msj = document.getElementById("msj");
var menu = document.getElementById("menu");

var aux;
var soynoob;
var intentos = 0;
var ganarr = false;
var perderr = false;

jugar.addEventListener("click", juego);
jugando.addEventListener("click", juegoDos);
menu.addEventListener("click", meniu);

$(document).ready(function(){

    $("#sub").click(function(){
        var num = $("#num").val();
        var email = $("#email").val();
        if(num.length<9){
            msj.innerHTML = "<h5>Numero invalido..</h5>";
            $("#msj").fadeIn();
            return false;
        }else if(!email.includes("gmail") && !email.includes("hotmail")){
            msj.innerHTML = "<h5>Completa el campo de email correctamente..</h5>";
            $("#msj").fadeIn();
            return false;
        }
        $("#msj").fadeOut();
        return true
    });
    
    
});

//Jugar

function juego(){
    if(confirm("Queres jugar un juego?")){

        $("#msj2").fadeOut(500, "");
        $("#juegaso").fadeOut(2000, "");
        soynoob = Math.floor((Math.random()*100)+1);
        $("#msj").fadeOut();
        $(".columna").fadeOut(300, "");
        $("#juegaso").fadeIn(2000, "");
        ganarr = false;
        perderr = false;
        intentos = 0;
    }else{
        alert("Ok..")
    }
}


// Intentar

// msj es el id de un div vacio al final del html
// pala es el id de un imput de tipo texto (required)

function juegoDos(){
    if(ganarr==false && perderr==false){
        aux = $("#pala").val();
        if (aux > 100 || isNaN(aux) || aux.length < 1) {
            msj.innerHTML = "<h5>Complete los campos correctamente..</h5>"
            $("#msj").fadeIn();
        }else if(intentos<5){
            intentos++;

            $("#msj").fadeOut(500, "");
            aux = $("#pala").val();
            if(aux==soynoob){
                msj.innerHTML = "<h5>Felicidades, ganaste!</h5>"
                $("#msj").fadeIn();
                ganarr = true;
                $("#msj2").fadeIn(500, "");

            }else if(aux>soynoob){
                if((intentos+1)==6){
                    msj.innerHTML = "<h5>Te quedaste sin intentos, el numero era el "+soynoob+"</h5>"
                    $("#msj").fadeIn();
                    perderr=true;
                    $("#msj2").fadeIn(500, "");
                }else{
                    msj.innerHTML = "<h5>El numero es menor..<br><br> Intentos restantes: "+(5-intentos)+"</h5>"
                    $("#msj").fadeIn();
                }
            }else if(aux<soynoob){
                
                if((intentos+1)==6){
                    msj.innerHTML = "<h5>Te quedaste sin intentos, el numero era el "+soynoob+"</h5>"
                    $("#msj").fadeIn();
                    perderr=true;
                    $("#msj2").fadeIn(500, "");
                }else{
                   msj.innerHTML = "<h5>El numero es mayor..<br><br> Intentos restantes: "+(5-intentos)+"</h5>"
                    $("#msj").fadeIn(); 
                }
            }
        }else{
            msj.innerHTML = "<h5>Te quedaste sin intentos, el numero era el "+soynoob+"</h5>"
                $("#msj").fadeIn();
                perderr=true;
        }
    }else if(ganarr==true){
        msj.innerHTML = "<h5>Ya ganaste! Si queres, volve a jugar..</h5>"
            $("#msj").fadeIn();
            $("#msj2").fadeIn(500, "");
    }else if(perderr==true){
        msj.innerHTML = "<h5>Ya perdiste! Si queres, volve a jugar..</h5>"
            $("#msj").fadeIn();
            $("#msj2").fadeIn(500, "");

    }
}

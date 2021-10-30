var ultimo = document.getElementById("ulti");
var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");
var imgg = document.getElementsByClassName("card-group");
var empezanding = document.getElementById("empezando");
boton.addEventListener("click",continuar);
boton2.addEventListener("click",cartas);
for(i=1; i<=imgg.length; i++){
    imgg[i].addEventListener("click",contCartas(this));
}


function continuar(){
    var mensaje = confirm("Estas seguro?");
    if(mensaje){
        empezar();
    }else{
        alert("Nos vemos luego..");
    }
}

function empezar(){
    $("#bienvenida").hide(1500, empezando);
    $("#ev").hide(1500, empezando);
}

function empezando(){
    $("#empezando").show(1500, "");
}

function cartas(){
    $("#empezando").hide(1500, "");
    $(".card-group").show(1500, "");

}

function contCartas(carta){
    var idd = carta.id;
    var cartita = document.getElementById(idd);
    $(".card-group").hide();
    if(idd<3){
        ultimo.innerHTML = "<h1>Felicidades, tendras una buena semana :)</h1>";
    }else if(idd<5){
        ultimo.innerHTML = "<h1>Lo siento, tendras una semana de mala suerte /:</h1>";
    }else if(idd<7){
        ultimo.innerHTML = "<h1>Enhorabuena, esta semana encontraras algo perdido O.o</h1>";
    }else if(idd<9){
        ultimo.innerHTML = "<h1>Bien por vos, esta semana tendras suerte</h1>";
    }else{
        ultimo.innerHTML = "<h1>Esta semana te daran una mala noticia! ):</h1>";

    }
}
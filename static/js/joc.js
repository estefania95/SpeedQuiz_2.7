var preguntes = 10;
var pregunta = $("#pregunta");
var r1 = $("#resposta--1");
var r2 = $("#resposta--2");
var r3 = $("#resposta--3");
var r4 = $("#resposta--4");
var respostes = [r1, r2, r3, r4];
var Response;
var quesitos = 0;
var esCorrecte;
peticio()
function peticio() {
  if (preguntes == 0) {

    if (quesitos == 10) {
      document
        .getElementById("#creu")
        .firstChild.style.setProperty("--svg", "red");
      $("#creu").addClass("ocult");
      $("#textBanner").html("NO HAS ENCERTAT TOTES LES PREGUNTES");
    } else {
      $("#trofeu").addClass("ocult");
      $("#textBanner").html("HAS ENCERTAT TOTES LES PREGUNTES!!!");
    }
    $("#bannerFiPartida").removeClass("ocult");

    var partida = $("#partida").text();
    var data = { formatgets: quesitos, partida: partida };

    $.ajax({
      url: "http://127.0.0.1:8000/partida/",
      type: "GET",
      contentType: "application/json; charset=utf-8",
      data: data,
      dataType: "text",
      success: function(res) {}
    });

  } else {
    $.ajax({
      url: "http://127.0.0.1:8000/home/api",
      success: function(response) {
        Response = response;
        if(preguntes == 10){ eventsClick() }
        inprimirContingut();
      },
      error: function() {
        alert("Error!"); 
      }
    });
  }
}
function eventsClick(){
    var event = 
[
    Response.respostes.resposta1.esCorrexta,
    Response.respostes.resposta2.esCorrexta, 
    Response.respostes.resposta3.esCorrexta,
    Response.respostes.resposta4.esCorrexta
]
    for(let i=0; i< respostes.length; i++){
        respostes[i].on("click", function() {
          alert("partida")
            esCorrecte = event[i];
            if (esCorrecte) {
              correcte();
            } else {
              inCorrecte();
            }
            peticio();
        });   
    }
}

function inprimirContingut(){
    document.getElementById('cartellPreguntes').style.setProperty("--cartellPreguntes", Response.categoria.color)
    pregunta.html(Response.textPregunta);

    r1.html(Response.respostes.resposta1.textResposta);
    r2.html(Response.respostes.resposta2.textResposta);
    r3.html(Response.respostes.resposta3.textResposta);
    r4.html(Response.respostes.resposta4.textResposta);
}

function correcte() {
  quesitos += 1;
  preguntes -= 1;
}

function inCorrecte() {
  preguntes -= 1;
}

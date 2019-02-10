var preguntesTotals = 10;
var preguntes = 0;
var pregunta = $("#pregunta");
var r1 = $("#resposta--1");
var r2 = $("#resposta--2");
var r3 = $("#resposta--3");
var r4 = $("#resposta--4");
var Response;
var quesitos = 1;

peticio()
function peticio() {
  preguntes += 1;
  $('#contador').html(preguntes+"/"+preguntesTotals);

  if (preguntes == preguntesTotals) {

    if (quesitos != preguntesTotals) {
      document
        .getElementById("creu").children[0].style.setProperty("--svg", "red");
      
      $("#trofeu").addClass("ocult");
      $("#textBanner").html("NO HAS ENCERTAT TOTES LES PREGUNTES");
    } else {
      $("#creu").addClass("ocult");
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
        if(preguntes == 1){ eventsClick() }
        inprimirContingut();
      },
      error: function() {
         
      }
    });
  }
}
function eventsClick(){
r1.on("click", function() {
  if(Response.respostes.resposta1.esCorrecta){
    correcte();
  }else{
    inCorrecte();
  }
});
r2.on("click", function() {
  if(Response.respostes.resposta2.esCorrecta){
    correcte();
  }else{
    inCorrecte();
  }
});
r3.on("click", function() {
  if(Response.respostes.resposta3.esCorrecta){
    correcte();
  }else{
    inCorrecte();
  }
});
r4.on("click", function() {
  if(Response.respostes.resposta4.esCorrecta){
    correcte();
  }else{
    inCorrecte();
  }
});
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
  var fp = $('#formatgesPetits').text();
  if(Number.parseInt(fp)+1 == 4){
    var fg = $('#formatgesGrans').text();
    $('#formatgesGrans').html(Number.parseInt(fg)+1);

    $('#formatgesPetits').html(0)
  }else{
    $('#formatgesPetits').html(Number.parseInt(fp)+1);

  }
  quesitos += 1;
  console.log(quesitos)
  peticio();
  document.getElementById("xivato").style.setProperty("--resposta", "green")
  $("#xivato").html("Correcte")
}

function inCorrecte() {
  peticio();
  document.getElementById("xivato").style.setProperty("--resposta", "red")
  $("#xivato").html("Incorrecte")
}

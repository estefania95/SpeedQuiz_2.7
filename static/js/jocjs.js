var preguntes = 11;
var pregunta = $('#pregunta');
var r1 = $('#resposta--1');
var r2 = $('#resposta--2');
var r3 = $('#resposta--3');
var r4 = $('#resposta--4');
var quesitos = 0;
var clic = 0;

function peticio(){
    if (preguntes==1){
        alert("Final Partida")
    }
    else{
        $.ajax({
            url: 'http://127.0.0.1:8000/home/api',
            success: function (response) {

            console.log(preguntes);
               pregunta.html(response.textPregunta);

               r1.html(response.respostes.resposta1.textResposta);
               r2.html(response.respostes.resposta2.textResposta);
               r3.html(response.respostes.resposta3.textResposta);
               r4.html(response.respostes.resposta4.textResposta);


               r1.on('click', function (){
                    var boleano = response.respostes.resposta1.esCorrexta

                        if(boleano){
                            bloquearacierto();
                        }
                        else{
                            bloquearerror();
                        }
                    }


               });
               r2.on('click', function (){
                    var boleano2 = response.respostes.resposta2.esCorrexta
                   if(boleano2){
                        bloquearacierto();
                    }
                    else{
                        bloquearerror();
                    }
               });
               r3.on('click', function (){
               var boleano3 = response.respostes.resposta3.esCorrexta
                    if(boleano3){

                        bloquearacierto();
                    }
                    else{

                        bloquearerror();
                    }
               });
               r4.on('click', function (boleano4){
                    var boleano4 = response.respostes.resposta4.esCorrexta
                    if(boleano4){

                        bloquearacierto();
                    }
                    else{

                        bloquearerror();
                    }
               });
            },
            error: function () {
                alert("Error!");
            }
        });
    }
}
function bloquearacierto(){
    quesitos += 1 ;
    preguntes -= 1;

}

function bloquearerror(){
    preguntes -= 1;

}
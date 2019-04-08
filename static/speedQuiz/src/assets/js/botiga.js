function accio(nomSkin, accio, numFormatges, preuSkin){
    if(accio=='comprar' && parseInt(numFormatges)<parseInt(preuSkin)){
        alert("No tens formatgets suficients")
    }
    else{
        var url = "http://127.0.0.1:80/home/botiga/";
        var dades = {'nomSkin': nomSkin, 'accio': accio};

        $.ajax({
              url: url,
              type: 'GET',
              contentType: 'application/json; charset=utf-8',
              data: dades,
              dataType: 'text',
              success: function() {

              }
          });
      }
}
function accio(nomSkin, accio){
    var url = "http://127.0.0.1:8000/home/botiga/";
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
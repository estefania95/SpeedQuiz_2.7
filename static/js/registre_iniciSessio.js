$(document).ready(function() {
  $("#flexa--devant").on("click" ,function() {
    alert("hola mon");
    //$(form).submit();
  });
  $("#id_username").attr("placeholder", "Nom d'usuari");
  $("#id_email").attr("placeholder", "Email");
  $("#id_password1").attr("placeholder", "Contrasenya");
  $("#id_password2").attr("placeholder", "Repateix la constrasenya");

});

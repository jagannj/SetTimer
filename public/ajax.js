
$(document).ready(function () {
    $("#btn-reset").click(function () {
      $.post( "http://localhost:8080/api/save",
         {
             time: JSON.parse(localStorage.getItem("Timer")),
         },
      );
    });
 });
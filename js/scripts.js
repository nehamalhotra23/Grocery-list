$(document).ready(function() {
  $(".blank").submit(function(event) {
    event.preventDefault();

    var groceries = [$("#item1").val().toUpperCase(), $("#item2").val().toUpperCase(), $("#item3").val().toUpperCase()]
    groceries.sort();

    groceries.forEach(function(grocery) {
      $(".list").append("<li>" + grocery + "</li>");
      // $(groceries).toUpperCase();








    });


  });
});

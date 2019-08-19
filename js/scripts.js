$(document).ready(function() {
  $(".blank").submit(function(event) {
    var groceries = [$("#item1").val(), $("#item2").val(), $("#item3").val()]
    groceries.forEach(function(grocery) {
      $(".list").append("<li>" + grocery + "</li>");
    });
    event.preventDefault();
  });
});

$(function() {
  $(".devourIt").on("click", function(event) {
    let id = $(this).data("id");
    let devouredIt = $(this).data("devoured");

    let devoured = {
      devoured: devouredIt
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
    }).then(function() {
      location.reload();
    });
  });

  $(".form-group").on("submit", function(event) {
    event.preventDefault();

    let addBurger = {
      name: $("#addBurger")
        .val()
        .trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: addBurger
    }).then(function() {
      console.log("Burger creation success!");
      location.reload();
    });
  });

  $(".prep").on("click", function(event) {
    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(function() {
      console.log("Prepped Burger: ", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});

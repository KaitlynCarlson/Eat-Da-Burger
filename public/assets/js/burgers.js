$(function() {
  $(".changeState").on("click", function(event) {
    const id = $(this).data("id");
    const devouredIt = $(this).data("devoured");
    const devouredState = {
      devoured: devouredIt
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("changed sleep to", devouredState);

      location.reload();
    });
  });

  $(".form-group").on("submit", function(event) {
    event.preventDefault();

    const addBurger = {
      burger_name: $("#burg")
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
});

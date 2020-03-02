$(function() {
  $(".changeState").on("click", function(event) {
    const id = $(this).data("id");
    const devoured = $(this).data("devoured");
    const devouredState = {
      devoured: devoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function() {
      console.log("changed sleep to", devoured);

      location.reload();
    });
  });

  $(".form-group").on("submit", function(event) {
    event.preventDefault();
    if ($("#burg").val() === null || $("#burg").val() === "") {
      alert("Field cannot be empty");
    } else {
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
    }
  });
  $("#clearData").on("click", function() {
    $.ajax("/api/burgers", {
      type: "DELETE"
    }).then(function() {
      console.log("Menu deletion success!");
      location.reload();
    });
  });
});

AOS.init({
  duration: 100
});

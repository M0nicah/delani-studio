// $("#design-description").hide();
// $("#development-description").hide();
// $("#product-management-description").hide();
//the following functions will show the descriptions on hover(what we do section)
/*$("#design").toggle(() => {
    $("#design").replaceWith($("#design-description"));
    $("#design-description").show();
});
$("#development").toggle(() => {
    $("#development").replaceWith($("#development-description"));
    $("#development-description").show();
});
$("#product-management").toggle(() => {
    $("#product-management").replaceWith($("#product-management-description"));
    $("#product-management-description").show();
});

document.getElementById("btn").addEventListener("click",() => {
    const name = document.getElementById("inputName").value();
    const email = document.getElementById("inputEmail").value();
    const message = document.getElementById("inputMessage").value();
});*/

//this function will add toggle effect to design section
$(document).ready(function () {
  $("#design").click(function () {
    $("#design-description").show();
    $("#design").hide();
  });

  $("#design-description").click(function () {
    $("#design").show();
    $("#design-description").hide();
    $("#development-description").hide();
  });
  //this function will add toggle effect to development section
  $("#development").click(function () {
    $("#development-description").show();
    $("#development").hide();
  });

  $("#development-description").click(function () {
    $("#development").show();
    $("#development-description").hide();
  });

  //this function will add toggle effect to product management section
  $("#product-management").click(function () {
    $("#product-management-description").show();
    $("#product-management").hide();
  });

  $("#product-management-description").click(function () {
    $("#product-management").show();
    $("#product-management-description").hide();
  });

  //the following functions will add hover effects to all portfolio sections
  $(".hover-1").mouseenter(function () {
    $(".hover-1").css({ "background-color": "white", opacity: "0.3" });
  });
  $(".hover-1").mouseleave(function () {
    $(".hover-1").css({ "background-color": "white", opacity: "1" });
  });

  $(".hover-2").mouseenter(function () {
    $(".hover-2").css({ "background-color": "white", opacity: "0.3" });
  });
  $(".hover-2").mouseleave(function () {
    $(".hover-2").css({ "background-color": "white", opacity: "1" });
  });

  $(".hover-3").mouseenter(function () {
    $(".hover-3").css({ "background-color": "white", opacity: "0.3" });
  });
  $(".hover-3").mouseleave(function () {
    $(".hover-3").css({ "background-color": "white", opacity: "1" });
  });

  $(".hover-4").mouseenter(function () {
    $(".hover-4").css({ "background-color": "white", opacity: "0.3" });
  });
  $(".hover-4").mouseleave(function () {
    $(".hover-4").css({ "background-color": "white", opacity: "1" });
  });

  $(".hover-5").mouseenter(function () {
    $(".hover-5").css({ "background-color": "white", opacity: "0.3" });
  });
  $(".hover-5").mouseleave(function () {
    $(".hover-5").css({ "background-color": "white", opacity: "1" });
  });

  $(".hover-6").mouseenter(function () {
    $(".hover-6").css({ "background-color": "white", opacity: "0.3" });
  });
  $(".hover-6").mouseleave(function () {
    $(".hover-6").css({ "background-color": "white", opacity: "1" });
  });

  $(".hover-7").mouseenter(function () {
    $(".hover-7").css({ "background-color": "white", opacity: "0.3" });
  });
  $(".hover-7").mouseleave(function () {
    $(".hover-7").css({ "background-color": "white", opacity: "1" });
  });

  $(".hover-8").mouseenter(function () {
    $(".hover-8").css({ "background-color": "white", opacity: "0.3" });
  });
  $(".hover-8").mouseleave(function () {
    $(".hover-8").css({ "background-color": "white", opacity: "1" });
  });

  //this function will add a click event to the submit button on the form.
  $("#btn").click(function () {
    let inputName = $("#inputName").val();
    let inputEmail = $("#inputEmail").val();
    let inputMessage = $("#inputMessage").val();

    console.log(inputEmail, inputMessage);

    alert("Hello " + inputName +  " we have received your request. Thank you for contacting us!")
  });
});

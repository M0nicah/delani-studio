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

//this function will add toggle effect to design.
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
//this function will add toggle effect to development
  $("#development").click(function () {
    $("#development-description").show();
    $("#development").hide();
  });

  $("#development-description").click(function () {
    $("#development").show();
    $("#development-description").hide();
  });

  /
});

// $(document).ready(function(){
//     $("#development").click (function(){
//         $("#development-description").show();
//         $("#development").hide();
//     });

// });
// $(document).ready(function(){
//     $("#product-management").click (function(){
//         $("#product-management-description").toggle();
//         $("#product-management").show();
//     });

// });

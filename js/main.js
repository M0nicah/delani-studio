$("#design-description").hide();
$("#development-description").hide();
$("#product-management-description").hide();
//the following functions will show the descriptions on hover(what we do section)
$("#design").toggle(() => {
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
});

if (inputName ==
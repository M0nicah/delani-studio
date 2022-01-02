$("#design-description").hide();
$("#development-description").hide();
$("#product-management-description").hide();
//the following functions will show the descriptions on hover(what we do section)
$("#design").hover(() => {
    $("#design").replaceWith(("#design-description"));
    $("#design-description").show();
});


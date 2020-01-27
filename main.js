window.addEventListener("load", function() {
  var elem = document.querySelector(".product-list");

  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true
  });

  // element argument can be a selector string
  //   for an individual element
  // var flkty = new Flickity( '.main-carousel', {
  //   // options
  // });
});

window.addEventListener("load", function() {
  let elem = document.querySelector(".product-list");

  let flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true
  });
});

const btn = document.querySelectorAll("button");
const count = document.getElementById("number");
let counter = 0;

btn.forEach(function(element, index) {
  btn[index].addEventListener("click", function() {
    counter++;
    count.innerHTML = counter;
  });
});

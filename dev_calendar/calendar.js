'use strict';
console.log("Hello world");
var divs = document.getElementsByClassName("date");
var today = new Date();
console.log(today);


for (var i = 0 ; i < divs.length ; i++) {

  divs[i].style.pointerEvents = 'none';
  //console.log(divs[i]);
}
console.log(new Date().getYear());

for (var j = 0 ; j < divs.length ; j++) {
  var divDate = divs[j].id.split('.');
  var date = new Date(divDate[2], divDate[1], divDate[0]);

  if (date <= today) {
    divs[j].style.pointerEvents = 'auto';
  }
}

'use strict';

var divs = document.body.getElementsByTagName("img");

var today = new Date();

for (var i = 0 ; i < divs.length; i++) {
  var divDate = divs[i].id.split('/');
  var date = new Date(divDate[2], divDate[1]-1, divDate[0]);
  console.log(date > today);

  if (date > today) {
    divs[i].style.pointerEvents = 'none';
  }
}



var navItem = document.querySelectorAll('.tabNav a');
var itemTab = document.querySelectorAll('.itemTab');

document.querySelector('.tabNav').onclick = function(e) {
  var target = e.target;
  for(var i = 0; i < navItem.length; i++) {
    if (target === navItem[i]) {
      showTab(i);
   }
  }
}

function showTab (i) {
  itemTab[i].classList.add('show');
}


var a = prompt('enter your login');
if (a == 'admin') {
  var pass = prompt('Enter Pass');
  if (pass == 'pass') {
    alert('Welcome User');
  } else if (pass === null) {
    alert('cencel password');
  } else {
    alert('False Password');
  }
} else if (a === null) {
  alert('Cancel');
} else {
  alert('Login false');
}

/*---------------- */

var newVar = 10;
var number = prompt('enter number');
function checkNumber(age) {
  return age > 10 ? true : false;
}

if (checkNumber(number)) {
  console.log('true');
} else {
  console.log('false');
}
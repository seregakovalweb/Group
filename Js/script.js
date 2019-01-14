

var obg = {
  test: function() {

  }
}
// obg.test();

// function Test(name) {
//   this.user = name;
//   this.test = function() {
//     console.log('=>>>',this.user);
//   }
// }
// var result = new Test('user');
// result.test();
// // console.log(new Test('user'));


class Login {
  super();
  constructor(name) {
    this.arr = ['test'];
  }
  showNameLogin() {
    var newArr = [...this.arrr, 'test'];
    console.log('showUSer', );
  }

  showNameLogin2 = (user) => {

  }
};

class NewTest extends Login {
  showName() {
    super.showNameLogin();
  }
}
new NewTest('123').showName();




// var navItem = document.querySelectorAll('.tabNav a');
// var itemTab = document.querySelectorAll('.itemTab');

// document.querySelector('.tabNav').onclick = function(e) {
//   var target = e.target;
//   for(var i = 0; i < navItem.length; i++) {
//     if (target === navItem[i]) {
//       showTab(i);
//    } else {
//       hideTab(i);
//    }
//   }
// }

// function hideTab(i) {
//   itemTab[i].classList.remove('show');
//   navItem[i].classList.remove('active');
// }

// function showTab (i) {
//   itemTab[i].classList.add('show');
//   navItem[i].classList.add('active');
// }

// var user = '{"name": "test"}';
// var user2 = {
//   name: 'test',
// };


// var dataUsers;
// var test = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => {
//     var users = data.slice(0, 15);
//     const elem = document.querySelector(".itemTab");
//     users.forEach(element => {
//       var div = document.createElement('p');
//       div.innerHTML = element.name;
//       elem.appendChild(div);
//     });
//   })

// fetch('http://5ba8ad5cfcccf90014471efd.mockapi.io/test/test', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     first_name: 'Ilya',
//     password: 'dfsfsf',
//   })
// })
//   .then(response => response.json())
//   .then(test => {
//     const elem = document.querySelector(".itemTab");
//     var div = document.createElement('p');
//     div.innerHTML = test.first_name;
//     elem.appendChild(div);
//   })


$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   600: {
    //     items: 3
    //   },
    //   1000: {
    //     items: 5
    //   }
    // }
  });

  $('.itemNav').click(function() {
    if(!$(this).hasClass('active')) {
      var index = $(this).index();
      $('.itemNav.show').removeClass('show');
      $('.itemTab.show').hide().removeClass('show');
      $(this).addClass('show');
      $($('.tabContent').children('.itemTab')[index]).fadeIn(1000).addClass('show');
    }
  });
});

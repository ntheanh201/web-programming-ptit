
function clickMenuIcon() {
  var arr;
  var menuSmall = document.getElementById("menu-small");
  var arr = menuSmall.className.split(" ");
  if (arr.indexOf("show") == -1) {
    menuSmall.classList.add("show");
  } else {
    menuSmall.classList.remove("show");
  }
}

function showFormLogin(){
  console.log('login');
  var form = document.getElementById("formLogin");
  var arr = form.className.split(" ");
  if (arr.indexOf("show") == -1) {
    form.classList.add("show");
  } else {
    form.classList.remove("show");
  } 
}

window.onscroll = function () {
  scrollFunc();
};

const scrollFunc = () => {
  var h = window.scrollY;
  // console.log('h : ', h);
  var iconTop = document.getElementById("icon-top");
  var header = document.getElementById("header");
  if (h > 300) {
    header.classList.add("fix-menu");
  } else {
    header.classList.remove("fix-menu");
  }
  if (h > 500) {
    iconTop.classList.remove("hidden");
  } else {
    iconTop.classList.add("hidden");
  }
};

function goTop() {
  console.log("scroll");
  window.scrollTo({
    top: 0,
  });
}

// $(window).on('load', function(event) {
//   setTimeout(() => {
//     $('.preloader').addClass('hidden')
//   }, 1000);
//   // $('.preloader').delay(1000).fadeOut('fast');
// });


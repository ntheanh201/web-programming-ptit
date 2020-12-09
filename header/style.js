// var KichThuoc = document.getElementsByClassName("slide_show")[0].clientWidth;
// var ChuyenSlide = document.getElementsByClassName("slides")[0];
// // var Img = ChuyenSlide.getElementsByTagName("img");
// var Img = ChuyenSlide.querySelectorAll(".slide-item");
// var Max = KichThuoc * Img.length;
// Max -= KichThuoc;
// var Chuyen = 0;
// function Next(){

// 	if(Chuyen < Max) Chuyen += KichThuoc;
// 	else Chuyen = 0;
// 	ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
// }

// function Back(){
// 	if(Chuyen == 0) Chuyen = Max;
// 	else Chuyen -= KichThuoc;
// 	ChuyenSlide.style.marginLeft = '-' + Chuyen + 'px';
// }
var ChuyenSlide = document.getElementsByClassName("slides")[0];
// var Img = ChuyenSlide.querySelectorAll(".slide-item");
var Img = ChuyenSlide.getElementsByTagName("img");

let Chuyen = 0;

function Next(){
	Chuyen = (Chuyen + Img.length + 1) % Img.length;
	console.log(ChuyenSlide.offsetWidth)
	ChuyenSlide.style.marginLeft = '-' + ChuyenSlide.children[0].offsetWidth * Chuyen  + 'px';
}

function Back(){

	Chuyen = (Chuyen + Img.length - 1) % Img.length;
	console.log(ChuyenSlide.offsetWidth)
	ChuyenSlide.style.marginLeft = '-' + ChuyenSlide.children[0].offsetWidth * Chuyen  + 'px';
}


setInterval(() => {
	Chuyen = (Chuyen + Img.length + 1) % Img.length;
	console.log(ChuyenSlide.offsetWidth)
	ChuyenSlide.style.marginLeft = '-' + ChuyenSlide.children[0].offsetWidth * Chuyen  + 'px';
}, 2000)

const nodeMenuNav = document.querySelector('.nav_bars-bth');
const nodeItemMenu = nodeMenuNav.querySelector('i');
const nodeMenu = nodeMenuNav.querySelector('ul');
// nodeMenu.style.position = 'none';
nodeItemMenu.addEventListener('click', () => {
	if(nodeMenu.style.display !== 'block') {
		nodeMenu.style.display = 'block';
	} else {
		nodeMenu.style.display = 'none';
	}
})
window.onscroll = function () {
	scrollFunc();
  };
  
const scrollFunc = () => {
	var h = window.scrollY;
	var header = document.getElementById("nav-header");
	if (h > 300) {
	  header.classList.add("fix-menu");
	} else {
	  header.classList.remove("fix-menu");
	}

  };
// add active to nav buttons when clicked
let links = document.querySelectorAll('.nav-links > li');
for (let i = 0; i < links.length; i++) {
	links[i].addEventListener('click', function() {
		links.forEach((ele) => {
			ele.classList.remove('active');
		});
		this.classList.add('active');
	});
}


// add active to portfolio buttons when clicked
let buttons = document.querySelectorAll('.buttons ul li');
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		buttons.forEach((btn) => {
			btn.classList.remove('active');
		});
		this.classList.add('active');
	});
}
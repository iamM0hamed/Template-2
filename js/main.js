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

// add the click event for the nav menu
// add the click event for the nav menu
const toggleMenu = document.querySelector('header nav .toggle-menu');
toggleMenu.addEventListener('click', () => {
	const navMenu = document.querySelector('header nav ul.nav-links');
	navMenu.classList.toggle('mobile-menu');
});

//==================================================================================

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


//==================================================================================


// Handle active state for skills bullets
let bulletLists = document.querySelectorAll('.skills .bullets');
bulletLists.forEach((bulletList) => {
	let bullets = bulletList.querySelectorAll('li');
	bullets.forEach((bullet) => {
		bullet.addEventListener('click', function() {
			bullets.forEach((b) => b.classList.remove('active'));
			this.classList.add('active');
		});
	});
});


//==================================================================================


// Landing Slider Logic

// avaible images
const landingImages = [
	'images/landing1.jpg',
	'images/landing2.jpg',
	'images/landing3.jpg',
];
const landing = document.querySelector('.landing');
const leftArrow = document.querySelector('.landing .left-angle');
const rightArrow = document.querySelector('.landing .right-angle');
const bullets = document.querySelectorAll('.landing .bullets li');
let currIndex = 0;

function setLandingImage(index) {
	if (index < 0) index = landingImages.length - 1;
	if (index >= landingImages.length) index = 0;

	currIndex = index;

	landing.style.backgroundImage = `url(${landingImages[currIndex]})`;
	bullets.forEach((b, i) => {b.classList.toggle('active', i === currIndex)})
};

leftArrow.addEventListener('click', () => {
	setLandingImage(currIndex - 1);
});

rightArrow.addEventListener('click', () => {
	setLandingImage(currIndex + 1);
});

bullets.forEach((b, idx) => {
	b.addEventListener('click', () => {
		setLandingImage(idx);
	});
});

setLandingImage(currIndex)

// Auto-change landing slider every 3 seconds
setInterval(() => {
	setLandingImage(currIndex + 1);
}, 3000);

//==================================================================================


// separate portfolio images to subpart
const portfolioImages =
	{
		all: [
			'images/shuffle-01.jpg',
			'images/shuffle-02.jpg',
			'images/shuffle-03.jpg',
			'images/shuffle-04.jpg',
			'images/shuffle-05.jpg',
			'images/shuffle-06.jpg',
			'images/shuffle-07.jpg',
			'images/shuffle-08.jpg',
		],
		app: [
			'images/shuffle-01.jpg',
			'images/shuffle-02.jpg',
			'images/shuffle-03.jpg',
		],
		photo: [
			'images/shuffle-03.jpg',
			'images/shuffle-04.jpg',
			'images/shuffle-05.jpg',
		],
		web: [
			'images/shuffle-01.jpg',
			'images/shuffle-05.jpg',
			'images/shuffle-06.jpg',
		],
		print: [
			'images/shuffle-01.jpg',
			'images/shuffle-03.jpg',
			'images/shuffle-07.jpg',
			'images/shuffle-08.jpg',
		],
	}

function renderPortfolioImages(category) {
	const container = document.querySelector('.portfolio .imgs-container');
	if (!container) return;
	container.innerHTML = '';
	portfolioImages[category].forEach(imgSrc => {
		const imgBox = document.createElement('div');
		imgBox.className = 'img-box';
		const img = document.createElement('img');
		img.src = imgSrc;
		img.alt = 'image';
		const caption = document.createElement('div');
		caption.className = 'caption';
		const h4 = document.createElement('h4');
		h4.innerText = 'Awesome Image';
		const p = document.createElement('p');
		p.innerText = 'photography';
		caption.appendChild(h4);
		caption.appendChild(p);
		imgBox.appendChild(img);
		imgBox.appendChild(caption)
		container.appendChild(imgBox);
	});
}

let portfolioBtns = document.querySelectorAll('.portfolio .buttons li');

portfolioBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		portfolioBtns.forEach(b => b.classList.remove('active'))
		btn.classList.add('active');
		const category = btn.dataset.category || 'all';
		renderPortfolioImages(category);
	});
});


//==================================================================================


// back to top button
// appearence logic
const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		backToTopBtn.style.display = 'block';
	} else {
		backToTopBtn.style.display = 'none';
	}
});

// click behavior
backToTopBtn.addEventListener(
	'click', () => {window.scrollTo({top: 0, behavior: 'smooth'})});


//==================================================================================

// progress filling animations
const skillsSection = document.querySelector('.skills');
const skillSpans = document.querySelectorAll('.skills .prog-holder span');
let skillsAnimated = false;

window.addEventListener('scroll', () => {
	if (!skillsSection) return;

	skillSpans.forEach(span => {
		const spanTop = span.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;

		if (spanTop < windowHeight - 75 && !span.classList.contains('animated')) {
			span.style.width = span.dataset.progress;
			span.classList.add('animated');
		}
	});
});


//==================================================================================

// Dark/Light mode toggle
const darkBtn = document.querySelector('.dark-btn');
const lightBtn = document.querySelector('.light-btn');
const body = document.querySelector('body');

// Check saved preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
	enableDarkMode();
}

// Toggle functions
function enableDarkMode() {
	body.classList.add('dark-theme');
	darkBtn.style.display = 'none';
	lightBtn.style.display = 'block';
	localStorage.setItem('theme', 'dark');
}

function enableLightMode() {
	body.classList.remove('dark-theme');
	darkBtn.style.display = 'block';
	lightBtn.style.display = 'none';
	localStorage.setItem('theme', 'light');
}

// Event listeners
darkBtn.addEventListener('click', enableDarkMode);
lightBtn.addEventListener('click', enableLightMode);
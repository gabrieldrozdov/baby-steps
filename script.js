// Step toggles
for (let step of document.querySelectorAll('.step')) {
	stepTitle = step.querySelector('.step-title');
	stepTitle.addEventListener('click', () => {
		if (parseInt(step.dataset.active) == 0) {
			step.dataset.active = 1;
			window.history.replaceState({}, "", `#${step.id}`);
		} else {
			step.dataset.active = 0;
		}
		step.scrollIntoView({behavior: "instant"});
	})
}
function openStep(id) {
	const step = document.querySelector(id);
	window.history.replaceState({}, "", id);
	step.dataset.active = 1;
	step.scrollIntoView();
}
function openAllSteps() {
	for (let step of document.querySelectorAll('.step')) {
		step.dataset.active = 1;
	}
}
function closeAllSteps() {
	for (let step of document.querySelectorAll('.step')) {
		step.dataset.active = 0;
	}
}

// Read URL and open the right step
function readURL() {
	const url = new URL(window.location.href);
	const stepID = url.hash;
	if (stepID) {
		openStep(stepID);
	}
}
readURL();

// GD with GD animation
const headerLink = document.querySelector('.header-link');
let temp = '';
for (let letter of headerLink.innerText) {
	if (letter == " ") {
		letter = `&nbsp;`;
	}
	temp += `<span>${letter}</span>`;
}
headerLink.innerHTML = temp;

const colors = ['pink', 'green', 'blue', 'yellow', 'purple', 'red'];
for (let span of document.querySelectorAll('.header-link span')) {
	span.style.setProperty('--primary', `var(--${colors[Math.floor(Math.random()*colors.length)]})`);
}
setInterval(() => {
	for (let span of document.querySelectorAll('.header-link span')) {
		span.style.setProperty('--primary', `var(--${colors[Math.floor(Math.random()*colors.length)]})`);
	}
}, 1500)
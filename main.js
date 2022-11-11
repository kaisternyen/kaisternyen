const listItems = document.querySelectorAll('.sidenav > li');
		photos= document.querySelectorAll('section > img');

listItems.forEach((li, i) => {
	li.addEventListener('mouseenter', () => {
		photos[i].classList.add('intro');
	})
	li.addEventListener('mouseleave', () => {
		photos[i].classList.remove('intro');
	})
	li.addEventListener('mousemove', (e) => {
		photos[i].style.left= -e.clientX*0.5 + 'px'
		photos[i].style.top= -e.clientY*0.5 + 250 + 'px'
	})
})

let button = document.querySelector('button');
let video = document.querySelector('#video');
let song = document.querySelector('#audio');

button.addEventListener('click', playPause);



function playPause() {

video.style.visibility= "visible";

	if(video.paused){
		video.play();
		audio.play();
		button.innerHTML = "PAUSE";
	} else {
		video.pause();
		audio.pause();
		button.innerHTML = "PLAY";
}
}







const video = document.querySelector("video");
const btn = document.querySelector("button");
const loader = document.querySelector(".loader-wrapper");

btn.addEventListener("click", function () {
	if(!btn.classList.contains("show")){
		btn.classList.add("show");
		video.pause();
	}else {
		btn.classList.remove("show");
		video.play();
	}
})

window.addEventListener("load", function () {
	loader.classList.add("none");
})
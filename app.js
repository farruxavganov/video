const video = document.querySelector("video");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
	if(!btn.classList.contains("show")){
		btn.classList.add("show");
		video.pause();
	}else {
		btn.classList.remove("show");
		video.play();
	}
})
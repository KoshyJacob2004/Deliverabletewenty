var video;
window.addEventListener("load", function() {
	
    console.log("Good job opening the window")

    video = document.getElementById("player1");
	video.autoplay = false;
	video.pause();
	video.loop = false;
	video.volume = document.querySelector("#slider").value/100;

	document.querySelector("#slider").addEventListener("input", () => {
        video.volume = document.querySelector("#slider").value/100;
		console.log(video.volume);
    });

    document.querySelector("#play").addEventListener("click", () => {
        document.querySelector("#player1").play();
    });
	document.querySelector("#pause").addEventListener("click", () => {
        document.querySelector("#player1").pause();
    });
	document.querySelector("#slower").addEventListener("click", () => {
		var video = document.getElementById('player1');
    	video.playbackRate = video.playbackRate * .9; // This will slow down the video to half 
		console.log(video.playbackRate)
        
    });
	document.querySelector("#faster").addEventListener("click", () => {
		var video = document.getElementById('player1');
    	video.playbackRate = video.playbackRate * 1.1; // This will slow down the video to half 
		console.log(video.playbackRate)
        
    });
	document.querySelector("#skip").addEventListener("click", () => {

    	advanceVideo();
		
	
        
    });
	document.getElementById('vintage').addEventListener('click', function() {
		var videoElement = document.getElementById('player1');
		videoElement.classList.add('oldSchool');
	});
	document.getElementById('orig').addEventListener('click', function() {
		var videoElement = document.getElementById('player1');
		videoElement.classList.remove('oldSchool');
	});
	document.getElementById('mute').addEventListener('click', function() {
		var videoElement = document.getElementById('player1');
		videoElement.muted = !videoElement.muted;

		if (document.getElementById('mute').textContent === "Mute"){
			document.getElementById('mute').textContent = "Unmute"


		}
		else{
			document.getElementById('mute').textContent= "Mute"

		}
	});




});

function advanceVideo() {
	var video = document.getElementById('player1');

	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log("Current location: " + video.currentTime);
}

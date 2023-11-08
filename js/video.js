var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	video.volume = document.querySelector('#slider').value / 100;

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		document.querySelector('#volume').textContent = Math.round(video.volume * 100) + '%';
	});

	document.querySelector("#pause").addEventListener("click", function() {
        console.log("Pause Video");
        video.pause();
    });

	document.querySelector("#slower").addEventListener("click", function() {
        console.log("Slow Down");
        video.playbackRate -= 0.1;
        console.log("New speed: " + video.playbackRate);
    });

	document.querySelector("#faster").addEventListener("click", function() {
        console.log("Speed Up");
        video.playbackRate += 0.1;
        console.log("New speed: " + video.playbackRate);
    });

	document.querySelector("#skip").addEventListener("click", function() {
        console.log("Skip Ahead");
        video.currentTime += 10;

         if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }

        console.log("Current video location: " + video.currentTime);
    });

	var muteButton = document.querySelector("#mute");
    muteButton.addEventListener("click", function() {
        console.log("Mute/Unmute");
	if (video.muted) {
            video.muted = false;
            video.volume = previousVolume;
            document.querySelector('#slider').value = previousVolume * 100;
            document.querySelector('#volume').textContent = Math.round(previousVolume * 100) + '%';
			muteButton.textContent = "Mute";
        } 
	else {
            muteButton.textContent = "Unmute";
            previousVolume = video.volume;
            video.muted = true;
             video.volume = 0;
            document.querySelector('#slider').value = 0;
            document.querySelector('#volume').textContent = "0%";
			
        }
    });

	var volumeSlider = document.querySelector("#slider");
    var volumeLabel = document.querySelector('#volume');
    volumeSlider.addEventListener("input", function() {
        video.volume = volumeSlider.value / 100;
        volumeLabel.textContent = Math.round(video.volume * 100) + '%';
    });

	document.querySelector("#vintage").addEventListener("click", function() {
        console.log("Old School");
        video.classList.add("oldSchool");
    });

	document.querySelector("#vintage").addEventListener("click", function() {
        console.log("Old School");
        video.classList.add("oldSchool");
    });

	document.querySelector("#orig").addEventListener("click", function() {
        console.log("Original");
        video.classList.remove("oldSchool");
    });


});

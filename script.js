function timer() {
  const targetDate = new Date("August 10, 2024 00:00:00"); // Replace with your target date
  const intervalId = setInterval(() => {
    const now = new Date();
    const differenceInMilliseconds = targetDate - now;

    if (differenceInMilliseconds <= 0) {
      clearInterval(intervalId);
      // document.getElementById('safeTimerDisplay').innerHTML = 'Timer expired';
      const pageTitle = document.getElementById("pageTitle");
      pageTitle.innerText = "Happy Birthday \n 🎂 Potti 🎂";
      const elementToRemove = document.getElementById("guessInfo");
      elementToRemove.remove();
      const elementToRemove2 = document.getElementById("safeTimerDisplay");
      elementToRemove2.remove();
      const infoText = document.getElementById("info");
      infoText.innerText = "👇click on the video👇"
      const imageContainer = document.getElementById("image-container");
      const image = document.createElement("img");
      image.src = "image.webp"; // Replace with your image path
      image.alt = "Description of your image";

      // Make the image responsive
      image.style.width = "100%";
      image.style.height = "auto";

      imageContainer.appendChild(image);
      // Add video element
      const videoContainer = document.createElement("div");
      videoContainer.id = "video-container";
      document.getElementById("videoPlaceHolder").append(videoContainer);
      const videoElement = document.createElement("video");
      videoElement.setAttribute("src", "video.mp4"); // Replace with your video source
      videoElement.setAttribute("controls", true);
      videoElement.muted = true; // Might increase chances of autoplay
      document.getElementById("video-container").appendChild(videoElement);

      // Attempt autoplay after a delay
      setTimeout(() => {
        videoElement.play();
        videoElement.muted = false;
        videoElement.addEventListener('play', () => {
          infoText.innerText = "🥳 Wish you a very Happy birthday 🥳"
        });
        
        videoElement.addEventListener('pause', () => {
          infoText.innerText = "👇 click on the video 👇"
        });
        
        videoElement.addEventListener('ended', () => {
          infoText.innerText = "🙏 God Bless You 💫"
        });
      }, 2000); // Adjust delay as needed
      return;
    }

    let seconds = Math.floor(differenceInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const displaySeconds = seconds % 60;
    const displayMinutes = minutes % 60;
    const displayHours = hours % 24;

    const formattedTime = `${days}Days ${displayHours}Hrs <br> ${displayMinutes}Mins ${displaySeconds}Sec`;
    document.getElementById("safeTimerDisplay").innerHTML = formattedTime;
  }, 1000);
}

timer();

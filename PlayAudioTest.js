
function showMyInfo() {
    alert("this is a test");
}

/**
 * Update seek time in audio-player-1
 * @param seekTimeSeconds
 */
function playAudioStartingAt(seekTimeSeconds) {
    console.log("playing audio starting at " + seekTimeSeconds + " seconds.");
    const audioElement = document.getElementById("audio-player-1");
    audioElement.currentTime=seekTimeSeconds;
}

function playMyAudioFile() {
    console.log("play audio");
    // const audioElement = new Audio("https://www.thisamericanlife.org/sites/default/files/audio/241/tOnoPT_QPUENKfXpNHhB4nrZV9tnUwrDzthAqdk3u7E/241.mp3");
    const audioElement = new Audio("file:///C:/Users/laurenra/Downloads/241.mp3");
    audioElement.controls=true;
    audioElement.currentTime=1711;
    audioElement.play();
}

function addAudioPlayer() {
    console.log("adding audio player");
    const playerDiv = document.getElementById("audio-player-div");
    // const audioElement = new Audio("file:///C:/Users/laurenra/Downloads/241.mp3");
    const audioElement = new document.createElement("audio");
    audioElement.controls=true;
    audioElement.currentTime=1711;
    // const divElement = do
    playerDiv.appendChild(audioElement);
}

function eventWindowLoaded() {
    console.log("window loaded so add audio player");
    const audioElement = document.createElement("audio");
    audioElement.src="file:///C:/Users/laurenra/Downloads/241.mp3"
    audioElement.controls=true;
    audioElement.currentTime=1711;
    const playerDiv = document.getElementById("audio-player-div");
    playerDiv.appendChild(audioElement);
}

// Add event listener and wait for
window.addEventListener('load', eventWindowLoaded, false);

console.log("add audio player");
// addAudioPlayer();
console.log("added audio player");

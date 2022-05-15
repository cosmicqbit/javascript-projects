const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select a media stream, pass to video element & play

async function selectMediaStream() {
    try {
         const mediaStream = await navigator.mediaDevices.getDisplayMedia();
         videoElement.srcObject = mediaStream;
         videoElement.onloadedmetadata = () => {
             videoElement.play();
         }
    } catch (error) {
        // Catch Error Here
        console.log('whoops, something is not right here\n', error)
    }
}

// On Load
selectMediaStream();
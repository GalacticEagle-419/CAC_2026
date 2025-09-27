    document.addEventListener('DOMContentLoaded', () => {
        const video = document.getElementById('videoElement');

        // Check if getUserMedia is supported
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Request access to the video stream
            navigator.mediaDevices.getUserMedia({ video: true, audio: false })
                .then((stream) => {
                    // Attach the stream to the video element
                    video.srcObject = stream;
                    video.play(); // Start playing the video
                })
                .catch((error) => {
                    console.error('Error accessing the camera:', error);
                    alert('Could not access the camera. Please ensure you have a camera and grant permission.');
                });
        } else {
            alert('getUserMedia is not supported by your browser.');
        }
    });

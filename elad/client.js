

// alert('hi');

const ws = new WebSocket('ws://localhost:9898/');

ws.onopen = function() {
    console.log('WebSocket Client Connected');
    ws.send('Hi this is web client.');
};

ws.onmessage = function(e) {
  console.log("Received: '" + e.data + "'");
  replaceVideo();
};

window.onload = () => {

    
    document.body.addEventListener("mousedown", function () {
        const vid = document.getElementById('theVideo');
    
        vid.muted = false;
    })

    const theButton = document.getElementById('theButton');

    theButton.addEventListener("click", function () {
        replaceVideo();
    })
}


function replaceVideo() {
    const vid = document.getElementById('theVideo');
        
    // vid.muted = false;
    vid.setAttribute('src', 'test3.mp4');
    vid.load();
    vid.play();
    vid.loop = false;

    vid.onended = () => {

        vid.setAttribute('src', 'test2.mp4');
        // vid.load();
        vid.play();
        vid.onended = null;
        vid.loop = true;

    }

}
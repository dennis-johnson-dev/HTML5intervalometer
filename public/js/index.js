var getUserMedia = require('getusermedia');

getUserMedia({video: true, audio: false}, function (err, stream) {
  if (err) {
    console.log('failed');
    console.log(err);
  } else {
      console.log('got a stream');
      var video = document.getElementById("video");

      // window.URL = window.URL || window.webkitURL || window.mozURL;
      var vendorURL = window.URL || window.webkitURL || window.mozURL;
      video.src = vendorURL.createObjectURL(stream);

      var canvas = document.getElementById("canvas"); 

      var i = 1;
      setInterval(function () {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        canvas.getContext('2d').drawImage(video, 0, 0);

        var imgData = canvas.toDataURL("image/png");

        imgData = imgData.replace('data:image/png;base64,', '');

        var postData = JSON.stringify({ imageData: imgData, index: i++ });

        $.ajax({
          url: "http://localhost:3011/api", 
          type: "POST",
          data: postData,
          contentType: "application/json"
        });

      }, 500);

    }
    video.play();
});

video.addEventListener('canplay', function (ev){
  var width = 200;
  var height = 0;
  if (!streaming) {
    height = video.videoHeight / (video.videoWidth/width);
  }
}, false);

HTML5 Intervalometer

#Description#
HTML5 Intervalometer is a web app that turns your webcam or other device via getUserMedia() into an intervalometer of which can be used to make timelapse videos.

This app utilizes a web server written in Express.js and FFmpeg for converting the received images into a .mov (or other format you choose). 

#Usage#
Install the dependencies

````
  $ npm install
````

You're also going to need to install FFmpeg. I did this via homebrew.
````
  $ brew install ffmpeg
````

Start the server

````
  $ node app.js  
````

Navigate to localhost:3011 in the browser

**Note:**

Please use Chrome as the browser. There is a bug with the drawImage() function in Firefox and I haven't tested in other browsers.

Allow the app to get control of your webcam or other device

At this point, there will be images starting to show up in the imgs folder within the project.

Once you are done taking images, close the page (haven't implemented the stop button yet)

Now, open a terminal window and cd into the imgs directory and run this command

````
  $ ffmpeg -r 12 -i out%d.png -r 30 -pix_fmt yuv420p out.mov
````

FFmpeg has a ton of options, but here is sort of the gist of what it's doing. It's reading 12 images a second and converting all of those seconds into a 30 fps quicktime movie (x.264, but fits where h.264 does) with the yuv420p (640 x 480) color profile (-pix_fmt). 

With FFmpeg, you can do
````
  $ ffmpeg -formats
````
to get a list of available formats and
````
  $ ffmpeg -pix_fmts
````
to get a list of available color profiles.


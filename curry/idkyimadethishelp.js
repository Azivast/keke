var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
// Display current playing song in text.
                    document.getElementById("playing").innerHTML = 
                        "<p>NOW PLAYING: AFRONEEQ - CURRY'S IN DANGER</p>";
                    playing.setAttribute('style', 'position: absolute;top: 57%;left: 50%;text-align: center; display: block;transform: translate(-50%, -50%);white-space: nowrap')


    var audio = new Audio("../music/Curry's in Danger.mp3");
    // Volume doesn't work for some reason.
    audio.volume = 0.2;
    // Pick new song after old one ends.
    audio.onended = function(){audio.play();};

var r=255,g=0,b=0;
setInterval(function(){
  if(r > 0 && b == 0){
    r--;
    g++;
  }
  if(g > 0 && r == 0){
    g--;
    b++;
  }
  if(b > 0 && g == 0){
    r++;
    b--;
  }
    a = 0.24;
$("#RGB").css("background-color","rgba("+r+","+g+","+b+", "+a+")");
},10);

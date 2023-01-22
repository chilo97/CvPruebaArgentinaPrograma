var x=1
document.getElementById('Nightmode').addEventListener("click", function(){
  if (x==1) {
    x--
    document.body.style.backgroundColor= "#000000";
    document.body.style.color ="#FFFFFF";
    document.getElementById("Nightmode").innerHTML= "Modo Diurno"}

    else {
      x++
      document.body.style.backgroundColor= "#FFFFFF";
      document.body.style.color ="#000000";
      document.getElementById("Nightmode").innerHTML= "Modo Nocturno"}});

document.getElementById('TW').onclick =function(){
  window.location.href ="https://www.twitter.com/";}

document.getElementById('FB').onclick =function(){
  window.location.href ="https://www.Facebook.com/";}

document.getElementById('IG').onclick =function(){
  window.location.href ="https://www.instagram.com/";}

document.getElementById('LI').onclick =function(){
  window.location.href ="https://www.Linkedin.com/";}

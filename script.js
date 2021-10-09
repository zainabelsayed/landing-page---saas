const hamIcon = document.getElementById("icon");
const navbar= document.getElementById('navbar')
hamIcon.addEventListener("click", function () {
  const myLinks = document.getElementById("my-links");
  myLinks.style.display == "block"
    ? (myLinks.style.display = "none")
    : (myLinks.style.display = "block");
});
window.onscroll = function(){
  if(document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 )
  {
    navbar.style.backgroundImage='linear-gradient(to right, #ad30fe, #7e43fb)'
    console.log('scrolled')
  }
  else{
    navbar.style.backgroundImage='none'
  }
}
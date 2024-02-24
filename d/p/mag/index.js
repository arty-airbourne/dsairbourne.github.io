  function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    console.log(firstElement);
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);
  
    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > (firstElement.clientWidth * 10)) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }
  
  //after window is completed load
  //1 class selector for marquee
  //2 marquee speed 0.2
  window.addEventListener('load', Marquee('.marquee', 0.2))
  
  var image = document.getElementById("image");
var button1 = document.getElementById("link-bj");
var button2 = document.getElementById("link-mag");

window.addEventListener('keydown', function (e) { if (e.key == "n") { togglNav() }}, false);

var button3 = document.getElementById("link-c");
buttonVar = false;
//Now, we need to add an Event Listener to listen when the image gets mouse over.
function delay(ms) {
    const start = new Date();
    let current;
  
    do {
      current = new Date();
    } while (current - start < ms);
  }
  
function revert() {
  if (buttonVar == false) {
        image.src = "https://www.airbourne.xyz/gitcopy/OtherTests/menuassets/logo.png"
    } 
}


button1.addEventListener('mouseover', function(){
  buttonVar = true;  
  image.src = "https://www.airbourne.xyz/gitcopy/OtherTests/menuassets/bj-menu.png"
})
button1.addEventListener('mouseout', function(){
    buttonVar=false;
    setTimeout(revert, 500);
  })
button2.addEventListener('mouseover', function(){
    buttonVar = true;  
  image.src = "https://www.airbourne.xyz/gitcopy/OtherTests/menuassets/mag-menu.png"
})
button2.addEventListener('mouseout', function(){
    buttonVar = false;
    setTimeout(revert, 500);
  })

button3.addEventListener('mouseover', function(){
    buttonVar = true; 
    image.src = "https://www.airbourne.xyz/gitcopy/OtherTests/menuassets/c-menu.png"
})
button3.addEventListener('mouseout', function() {
    buttonVar = false; 
    setTimeout(revert, 500);
  })


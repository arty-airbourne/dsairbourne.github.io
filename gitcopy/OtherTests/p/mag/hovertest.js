var image = document.getElementById("image");
var button1 = document.getElementById("link-bj");
var button2 = document.getElementById("link-mag");
var button3 = document.getElementById("link-c");

//Now, we need to add an Event Listener to listen when the image gets mouse over.

button1.addEventListener('mouseover', function(){
  image.src = "https://www.airbourne.xyz/gitcopy/OtherTests/menuassets/bj-menu.png"
})
button1.addEventListener('mouseout', function(){
    image.src = "https://www.airbourne.xyz/gitcopy/OtherTests/menuassets/logo.png"
  })
button2.addEventListener('mouseover', function(){
  image.src = "https://www.airbourne.xyz/gitcopy/OtherTests/menuassets/mag-menu.png"
})
button2.addEventListener('mouseout', function(){
    image.src = "https://www.airbourne.xyz/gitcopy/OtherTests/menuassets/logo.png"
  })

button3.addEventListener('mouseover', function(){
  image.src = "https://www.airbourne.xyz/gitcopy/OtherTests/menuassets/c-menu.png"
})
button3.addEventListener('mouseout', function(){
    image.src = "https://www.airbourne.xyz/gitcopy/OtherTests/menuassets/logo.png"
  })


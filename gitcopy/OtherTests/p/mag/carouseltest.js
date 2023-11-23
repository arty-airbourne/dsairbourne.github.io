const $scroll = $('#bottom-left');

$(window).on("scroll", function(){
  const st = $(this).scrollTop();
  if( st >= 240){
    $scroll.css({position: "absolute", top: 330});  
  }else{
    $scroll.css({position: "fixed", top: 100});  
  }       
});

var bMobile =   // will be true if running on a mobile device
  navigator.userAgent.indexOf( "Mobile" ) !== -1 || 
  navigator.userAgent.indexOf( "iPhone" ) !== -1 || 
  navigator.userAgent.indexOf( "Android" ) !== -1 || 
  navigator.userAgent.indexOf( "Windows Phone" ) !== -1 ;

  const overflow = document.querySelector("#overflow");
  const viewport = document.querySelector(".viewport");
  const wrapper  = document.querySelector(".wrapper");
  const boxes    = document.querySelector(".boxes");
  const proxy    = document.createElement("div");
  
  const direction = "to-left"; // "to-left" | "to-right"
  const directionVal = direction == 'to-left' ? -1 : 1;
  const numBoxes  = 10;  
  const boxWidth  = 350;
  const boxHeight = 250;  
  const imgWidth  = boxWidth  - 6;
  const imgHeight = boxHeight - 14;
  const viewWidth = innerWidth;
  const wrapWidth = numBoxes * boxWidth;
  const wrapVal = gsap.utils.wrap(0, wrapWidth);
  const wrapProgress = gsap.utils.wrap(0, 1);
  
  gsap.set([wrapper, viewport], { height: boxHeight, xPercent: -50 });
  gsap.set(boxes, { left: -boxWidth });
  
  for (let i = 1; i <= numBoxes; i++) {
    const src = "https://unsplash.it/" + imgWidth + "/" + imgHeight + "?random=" + i;
    const num = document.createElement("div");
    num.className = "num";
    num.innerText = i;
  
    const img = document.createElement("img");
    img.src = src;
    img.width = imgWidth;
    img.height = imgHeight;
  
    const box = document.createElement("div");
    box.className = "box";
  
    box.appendChild(img);
    box.appendChild(num);
  
    boxes.appendChild(box);
  
    gsap.set(box, { x: i * boxWidth, width: boxWidth, height: boxHeight });
  }
  
  const stringX = directionVal == -1 ? `-=${wrapWidth}` : `+=${wrapWidth}`;
  
  const animation = gsap.to(".box", {
    repeat: -1,
    duration: 20,
    x: stringX,
    ease: "none",
    paused: true,
    modifiers: {
      x: function(x, target) {
        if(directionVal==-1){
          x = ((parseInt(x) - wrapWidth) % wrapWidth) + wrapWidth;
        }else{
          x = parseInt(x) % wrapWidth;
        }
        target.style.visibility = x - boxWidth > viewWidth ? "hidden" : "visible";
        return `${x}px`;
      }
    }
  });
  
  Draggable.create(proxy, {
    type: "x",
    trigger: ".wrapper",
    inertia: true,
    onDrag: updateProgress,
    onThrowUpdate: updateProgress
  });
  
  function updateProgress() {
    const dragValue = (wrapVal(this.deltaX * directionVal) / wrapWidth);
    const currentProgressAnim = animation.progress();
    const endProgress = wrapProgress(currentProgressAnim + dragValue);
    animation.progress(endProgress);
  }
  
  
  function resize() {
    viewWidth = viewport.offsetWidth;
    animation.render(animation.time(), false, true);
  }
  
  function applyOverflow() {
    if(overflow.checked) {
      gsap.set(".wrapper", {overflow: "visible"});
    } else {
      gsap.set(".wrapper", {overflow: "hidden"});
    }
  }
  
  overflow.addEventListener("change", applyOverflow);
  window.addEventListener("resize", resize);
  
  wrapper.addEventListener("mouseenter", () => animation.pause());
  wrapper.addEventListener("mouseleave", () => animation.play());
  
  // AUTOPLAY
  animation.play();
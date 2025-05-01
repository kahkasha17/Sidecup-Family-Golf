var cursor=document.querySelector("#cursor");
var cursorBlur=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+30+"px";
    cursor.style.top=dets.y+"px";
    cursorBlur.style.left=dets.x-200+"px";
    cursorBlur.style.top=dets.y-200+"px";
})
var navh4=document.querySelectorAll("#nav h6");
navh4.forEach(function(elem) {
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale=3,
        cursor.style.border="1px solid white"
        cursor.style.backgroundColor="transparent"
        
        
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1,
        cursor.style.border="0px solid #95c11e "
        cursor.style.backgroundColor="#95c11e"
        
    })
    
});

gsap.to("#nav",{
    backgroundColor:"black",
    height:"5px",
    // padding: "40px 0px 40px 110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }


})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:5,
    }


})


gsap.from("#about, #aboutus img",{
   y:50,
   opacity:0,
   duration:1,
   scrollTrigger:{
    trigger:"#aboutus ",
    scroller:"body",
    start:"top 60%",
    end:"top  55%",
    scrub:2,
}


})

gsap.from("#cardContainer", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#cardContainer",
      scroller: "body",
      start: "top 60%",
      end: "top 55%",
      scrub: 2,
    }
  });
  
  gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
     trigger:"#colon1",
     scroller:"body",
     start:"top 55%",
     end:"top  45%",
     scrub:3,
 }
 
 })

 gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
     trigger:"#colon1   ",
     scroller:"body",
     start:"top 55%",
     end:"top  45%",
     scrub:3,
 }
 
 })

 gsap.from("#page4 h1", {
    y:70,
    scrollTrigger:{
        trigger:"#page4 h1   ",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2,
    }
  });
  
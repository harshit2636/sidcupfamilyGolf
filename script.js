let c=document.querySelector("#cursor")
let blr=document.querySelector("#blr")
document.addEventListener("mousemove",function(dets){
    c.style.left=dets.x+30+"px"
    c.style.top=dets.y+"px"
})
document.addEventListener("mousemove",function(dets){
    blr.style.left=dets.x-150+"px"
    blr.style.top=dets.y-150+"px"
})
let h4all=document.querySelectorAll("#nav h4")
    h4all.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            cursor.style.scale=3
            cursor.style.border="1px solid white";
            cursor.style.backgroundColor="transparent"
        })
        elem.addEventListener("mouseleave",function(){
            cursor.style.scale=1
            cursor.style.border="0px solid #95C11E";
            cursor.style.backgroundColor="#95C11E"
        })
    })
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:1,
    // dely:1,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -11%",
        // scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -75%",
        // scrub:3,
    }
})
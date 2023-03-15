gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");
let firstImage = document.querySelector(".first");
let secondImage = document.querySelector(".second");
let headname = document.querySelector(".headline");
let message = document.querySelector(".message")
let label = document.querySelector(".lab")
let home = document.querySelector(".firstContainer")

let button = document.querySelector(".explore")
button.addEventListener("click", ()=>{
    console.log("the bbt works")
    gsap.to(firstImage, {
        y: -200,
        duration : 1,
        opacity: 0,
        ease : "power2.inOut"
    })
    gsap.to(secondImage, {
        y: -200,
        opacity: 0,
        duration : 1,
        ease : "power2.inOut",
        delay : 0.3
    })
    gsap.to(headname, {
        y: -200,
        opacity: 0,
        duration : 1,
        ease : "power2.inOut",
        delay : 0.5
    })
    gsap.to(message, {
        y: -200,
        opacity: 0,
        duration : 1,
        ease : "power2.inOut",
        delay : 0.7
    })
    gsap.to(button, {
        y: -200,
        duration : 1,
        ease : "power2.inOut",
        delay : 1,
        backgroundColor : 'rgba(0, 0, 0, 0.01)',
        border : "3px dashed yellow"
    })
    gsap.to(label, {
        opacity : 0,
        delay: 1.5
    })
    gsap.to(button, {
        width : "200px",
        height : "200px",
        borderRadius : "+=100%",
        delay : 1.7,
    })
    gsap.to(button, {
        rotation: 360,
        scale : 20,
        duration : 3,
        opacity : 0,
        delay: 2
    })
    gsap.to(home, {
        display:"none",
        delay : 2
    })
})

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});


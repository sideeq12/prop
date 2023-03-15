gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");
let firstImage = document.querySelector(".first");
let secondImage = document.querySelector(".second");
let headname = document.querySelector(".headline");
let message = document.querySelector(".message")
let label = document.querySelector(".lab")
let home = document.querySelector(".firstContainer")
let button = document.querySelector(".explore")

gsap.from(firstImage, {
    y: -200,
    opacity : 0,
    duration : 1,
    ease : "power2.inOut"
})
gsap.from(secondImage, {
    y: -200,
    opacity : 0,
    duration : 1,
    delay : 0.5,
    ease : "power2.inOut"
})
gsap.from(headname, {
    x: 200,
    opacity : 0,
    duration : 1,
    delay : 1,
    scale : 0,
    ease : "power2.inOut"
})
gsap.from(message, {
    x: 200,
    opacity : 0,
    duration : 1,
    scale : 0,
    delay : 1.5,
    ease : "power2.inOut"
})
gsap.from(button, {
    x: 200,
    opacity : 0,
    duration : 1,
    scale : 0,
    delay : 2,
    ease : "power2.inOut"
})
button.addEventListener("click", ()=>{
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
        display : "none",
        delay : 1.3
    })
    gsap.to(label, {
        opacity : 0,
        delay: 1.5
    })
    gsap.to(home, {
        display:"none",
        delay : 2
    })
})

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     end: () => "+=" + document.querySelector(".container").offsetWidth
//   }
// });


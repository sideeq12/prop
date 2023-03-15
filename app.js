gsap.registerPlugin(ScrollTrigger);

let red = document.querySelector(".red")
let purple = document.querySelector(".purple")
let orange = document.querySelector(".orange")
let mail = document.querySelector(".mail")
let prev = document.querySelector(".prev")
let phylo = document.querySelector(".phylo")
let firstImage = document.querySelector(".first");
let secondImage = document.querySelector(".second");
let headname = document.querySelector(".headline");
let message = document.querySelector(".message")
let label = document.querySelector(".lab")
let home = document.querySelector(".firstContainer")
let button = document.querySelector(".explore")
let contain = document.querySelector(".container")

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
gsap.to(contain, {
    scrollTrigger :{
        trigger : contain,
        start : "top center",
        
    },
    opacity : 1,
    duration : 3
})
gsap.to(red, {
    scrollTrigger :{
        trigger : red,
        start : "top center",
        
    },
    opacity : 1,
    duration : 3
})
gsap.to(orange, {
    scrollTrigger :{
        trigger : orange,
        start : "top center",
        
    },
    opacity : 1,
    duration : 3
})
gsap.to(prev, {
    scrollTrigger :{
        trigger : prev,
        start : "top center",
        
    },
    opacity : 1,
    duration : 3
})
gsap.to(purple, {
    scrollTrigger :{
        trigger : purple,
        start : "top center",
        
    },
    opacity : 1,
    duration : 3
})
gsap.to(mail, {
    scrollTrigger :{
        trigger : mail,
        start : "top center",
        
    },
    opacity : 1,
    duration : 3
})
gsap.to(phylo, {
    scrollTrigger :{
        trigger : phylo,
        start : "top center",
        
    },
    opacity : 1,
    duration : 3
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


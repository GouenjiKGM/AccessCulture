window.addEventListener("DOMContentLoaded", function() {

    button1 = document.querySelector("#blue")
    button2 = document.querySelector("#red")
    // let sceneEl = document.querySelector('a-scene');
    body = document.querySelector("body")
    b = 0;
    a = 0;

    // AFRAME.registerComponent('marker', {
    //     schema: {
    //       default: ''
    //     },
    //     init() {
    //       const sky = document.querySelector('a-image');
    //       var b = false
    //       sceneEl.querySelector("#damso").addEventListener('click', () => {
    //         // if (b) {
    //         //   sky.setAttribute('src', "#entrance");
    //         // } else {
    //         //   sky.setAttribute('src', "#study");
    //         // }
    //         // b = !b;
    //         console.log('clicked');
    //       });
    //     }
    //   });

    // Damso.addEventListener("click", function() {
        
    // })
    // console.log(sceneEl.querySelector('#damso'));

    // sceneEl.querySelector('#damso').addEventListener("click", function() {
    //     console.log("Hello world")
    // })

    // button1.addEventListener("click", function(){
    //     if (a == 1) {
    //         body.classList.remove("blue")
    //         button1.classList.remove("btn-blue")
    //         button2.classList.remove("visibility")
    //         a = 0;
    //         // body.classList.remove("fade-in");
    //     }
    //     else {
    //         // body.classList.add("fade-in");
    //         body.classList.add("blue");
    //         button1.classList.add("btn-blue")
    //         // button2.classList.add("fade-out")
    //         button2.classList.add("visibility")
    //         a = 1;
    //     }
    // })

    // button2.addEventListener("click", function() {
    //     if (b == 1) {
    //         body.classList.remove("red")
    //         button1.classList.remove("visibility")
    //         b = 0;
    //         // body.classList.remove("fade-in");
    //     }
    //     else if (b == 0) {
    //         // body.classList.add("fade-in");
    //         body.classList.add("red");
    //         button1.classList.add("visibility")
    //         b = 1;
    //     }
    // })
})
window.addEventListener("DOMContentLoaded", function() {

    // Dark Mode
    let body = document.querySelector("body")
    let logo = document.querySelector(".head .logo")
    let prototype = document.querySelector(".prototype")
    let section = document.querySelectorAll("section")
    let footer_container = document.querySelector(".footer_container")
    let footer_bot = document.querySelector(".footer-bot")
    let footer = document.querySelector("footer")
    let header_police = document.querySelectorAll(".header_logo ul li a")

    // checkbox
    let checkbox = document.querySelector(".checkbox--input")
    // Slide DarkMode/none
    checkbox.addEventListener("change", function() {
        if(this.checked) {
            body.classList.remove("white_bg")
            logo.src ="/../Homepage-assets/Blanc(dark).png"
            document.querySelector(".profile > span").style.color = "initial"
            prototype.style.background = "initial"
            prototype.querySelector(".tchatHeader").style.borderBottom = "1px solid initial"
            prototype.querySelector(".tchatHeader").style.color = "initial"
            body.style.color = "initial"
            document.querySelector("#tchat").style.backgroundColor = "initial"
            document.querySelector("#tchat").style.color = "initial"
            document.querySelector(".title > div > p").style.color = "initial"
            document.querySelector(".artist_info span").style.color = "initial"
            document.querySelector(".artist_info > span:nth-child(2)").style.color = "initial"
            document.querySelector(".poko").style.color = "initial"
        }    
        else {
            body.classList.add("white_bg")
            logo.src ="/../Homepage-assets/logo blanc.png"
            document.querySelector(".profile > span").style.color = "#41444B"
            prototype.style.background = "#FFFFFF"
            prototype.querySelector(".tchatHeader").style.borderBottom = "1px solid #41444B"
            prototype.querySelector(".tchatHeader").style.color = "#41444B"
            body.style.color = "#41444B"
            console.log(document.querySelector("#tchat"))
            document.querySelector("#tchat").style.backgroundColor = "#ECECEC"
            document.querySelector("#tchat").style.color = "#ECECEC"
            document.querySelector(".title > div > p").style.color = "#41444B"
            document.querySelector(".artist_info span").style.color = "#41444B"
            document.querySelector(".buyMerch > p").style.color = "#41444B"
            document.querySelector(".artist_info > span:nth-child(2)").style.color = "#1D232B"
            document.querySelector(".point").style.color = "#41444B"
            document.querySelector(".point_value").style.color = "#41444B"
            document.querySelectorAll(".product_police_grey").forEach(e => {
                e.style.color = "#41444B"
            })
            document.querySelectorAll(".product_police_white").forEach(e => {
                e.style.color = "#41444B"
            })
        }
    })

    let croix = document.querySelector(".croix")

    croix.addEventListener("click", function() {
        document.location.href="/index.html"
    })

})
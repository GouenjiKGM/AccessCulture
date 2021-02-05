window.addEventListener("DOMContentLoaded", function() {
    let body = document.querySelector("body")
    let header = document.querySelector("header")
    let footer = document.querySelector(".footer_container , .footer-bot")
    let footer_bot = document.querySelector(".footer-bot")
    let logo = document.querySelector(".logo")
    let checkbox = document.querySelector(".checkbox--input")
    let header_police = document.querySelectorAll(".header_logo ul li a")

    checkbox.addEventListener("change", function() {
        if(this.checked) {
            body.classList.remove("white_bg")
            body.style.backgroundColor = "#1F252D"
            header.style.backgroundColor = "#252C36"
            footer.style.backgroundColor = "#252836"
            footer_bot.style.backgroundColor = "#252836"
            logo.src ="LOGO_BLANC.png"
            body.style.color = "white"
            // document.querySelector(".header_logo > ul > li > a").style.color = "ffff!important" 
            document.querySelector(".artistContent > p").style.background = "none"
            document.querySelectorAll(".connexion a").forEach(e => {
                e.style.color = "white"
            })
            header_police.forEach(e=> {
                e.style.color = "white"
            })
            
            
        }else {
            body.style.backgroundColor = "white"
            header.style.backgroundColor = "white"
            logo.src ="LOGO_NOIR.png"
            body.style.color = "black"
            footer.style.backgroundColor = "#0441A0"
            footer_bot.style.backgroundColor = "#0441A0"
            document.querySelector(".artistContent > p").style.background = "initial"
            document.querySelectorAll(".connexion a").forEach(e => {
                e.style.color = "initial"
            })
            header_police.forEach(e=> {
                e.style.color = "black"
            })

            // document.querySelector(".header_logo > ul > li > a").style.color = "black!important"
        }   





        
    })

})
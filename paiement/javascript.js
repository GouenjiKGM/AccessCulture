window.addEventListener("DOMContentLoaded", function() {
    let body = document.querySelector("body")
    let header = document.querySelector("header")
    let logo = document.querySelector(".logo")
    let checkbox = document.querySelector(".checkbox--input")
    let payInfo = document.querySelector(".payInfo")

    
    checkbox.addEventListener("change", function() {
        if(this.checked) {
            body.classList.remove("white_bg")
            body.style.backgroundColor = "#1F252D"
            header.style.backgroundColor = "#252C36"
            logo.src ="LOGO_BLANC.png"
            body.style.color = "white" 
            document.querySelector(".confirmation > p:nth-child(1)").style.color = "white"
            document.querySelector(".confirmation > p:nth-child(2)").style.color = "white"
            document.querySelector(".allpayInfoContent > p").style.color = "white"
            document.querySelector(".part2pay > p").style.color = "white"
            document.querySelector("#name").style.background = "none"
            document.querySelector("#name").style.color = "white"
            document.querySelector("#carte").style.background = "none"
            document.querySelector("#date").style.background = "none"
            document.querySelector("#CCV").style.background = "none"
            document.querySelectorAll(".contentPaymentMethode > div").forEach(e => {
                e.style.background = "#1F252D"
            })
            document.querySelector(".confirmation > p:nth-child(2)").style.color = "white"
            document.querySelector("#sent_Btn").style.background = "#0441A0"

            payInfo.style.background = "#252C36"
        }else {
            body.style.backgroundColor = "white"
            header.style.backgroundColor = "white"
            logo.src ="LOGO_NOIR.png"
            body.style.color = "black"
            document.querySelector(".confirmation > p:nth-child(1)").style.color = "initial"
            document.querySelector(".confirmation > p:nth-child(2)").style.color = "initial"
            document.querySelector(".allpayInfoContent > p").style.color = "initial"
            document.querySelector(".part2pay > p").style.color = "initial"
            document.querySelector("#name").style.background = "none"
            document.querySelector("#name").style.color = "initial"
            document.querySelector("#carte").style.background = "none"
            document.querySelector("#date").style.background = "none"
            document.querySelector("#CCV").style.background = "none"
            document.querySelectorAll(".contentPaymentMethode > div").forEach(e => {
                e.style.background = "white"
            })
            document.querySelector(".confirmation > p:nth-child(2)").style.color = "initial"
            document.querySelector("#sent_Btn").style.background = "#7CCCE9 0% 0% no-repeat padding-box"
            payInfo.style.background = "white"

            // document.querySelector(".header_logo > ul > li > a").style.color = "black!important"
        }   





        
    })

})
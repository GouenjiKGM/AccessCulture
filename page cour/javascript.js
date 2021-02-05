window.addEventListener("DOMContentLoaded", function() {

        // Dark Mode
    let header = document.querySelector("header")
    let section = document.querySelectorAll("section")
    let header_police = document.querySelectorAll(".header_logo ul li a")
    let footer_container = document.querySelector(".footer_container")
    let footer_bot = document.querySelector(".footer-bot")
    let footer = document.querySelector("footer")
    let section1 = document.querySelector(".section1")
    let section2 = document.querySelectorAll(".section2")
    let barre = document.querySelectorAll(".barre")
    let name = document.querySelectorAll(".name")
    // checkbox
    let checkbox = document.querySelector(".checkbox--input")
    // Slide DarkMode/none
    checkbox.addEventListener("change", function() {
        if(this.checked) {
            header.classList.add("dark_header")
            header_police.forEach(e=> {
                e.style.color = "white"
            })
            section.forEach(element => {
                element.classList.add("dark_bg") 
                element.style.color = "white"
            });
            document.querySelectorAll(".connexion a").forEach(e => {
                e.style.color = "white"
            })
            footer.classList.add("dark_bg")
            footer_bot.classList.add("dark_footer")
            footer_container.classList.add("dark_footer")
            section1.classList.add("dark_bg")
            section2.forEach(e => {
                e.classList.add("dark_bg")
            })
            barre.forEach(b => {
                b.style.height = "10px"
                b.style.marginTop = "5px"
            })
            name.forEach(n => {
                n.style.color = "white"
            })
        }    
        else {
            header.classList.remove("dark_header")
            header_police.forEach(e=> {
                e.style.color = "black"
            })
            section.forEach(element => {
                element.classList.remove("dark_bg") 
                element.style.color = "initial"
            });
            document.querySelectorAll(".connexion a").forEach(e => {
                e.style.color = "initial"
            })
            footer.classList.remove("dark_bg")
            footer_bot.classList.remove("dark_footer")
            footer_container.classList.remove("dark_footer")
            section1.classList.remove("dark_bg")
            section2.forEach(e => {
                e.classList.remove("dark_bg")
            })
            barre.forEach(b => {
                b.style.height = "2px"
                b.style.marginTop = "10px"
            })
            name.forEach(n => {
                n.style.color = "black"
            })
        }
    })
})



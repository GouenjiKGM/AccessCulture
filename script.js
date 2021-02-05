window.addEventListener("DOMContentLoaded", function() {
    // Initialisation valeurs

    let right_arrow = document.querySelector(".right-arrow")
    let left_arrow = document.querySelector(".left-arrow")
    let first_img = document.querySelector(".slide.first > img")
    let second_img = document.querySelector(".slide.second > img")
    let a = 0
    let artist_block = document.querySelectorAll(".artist")
    let overlay = document.querySelectorAll(".overlay")
    let word = document.querySelector(".artist p")

// Manual navigation
    right_arrow.addEventListener("click", function () {
        first_img.style.marginLeft = "-1300px"
    })

    left_arrow.addEventListener("click", function () {
        first_img.style.marginLeft = "0"
        
    })

// Automatic navigation
setInterval(function(){
    if (a === 0) {
        first_img.style.marginLeft = "-1300px"
        a = 1;
    }
    else if(a === 1) {
        first_img.style.marginLeft = "0px"
        a = 0;
    }
}, 5000);


// Dark Mode
    let header = document.querySelector("header")
    let section = document.querySelectorAll("section")
    let newsletter = document.querySelector(".newsletter_container")
    let button = document.querySelector(".inscription button")
    let footer_container = document.querySelector(".footer_container")
    let footer_bot = document.querySelector(".footer-bot")
    let footer = document.querySelector("footer")
    let header_police = document.querySelectorAll(".header_logo ul li a")
    let category_police = document.querySelectorAll(".category a")
    let logo = document.querySelector(".logo")

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
            category_police.forEach(ele => {
                ele.style.color ="white"
            });
            newsletter.classList.add("dark_newsletter-container")
            button.style.background = "#1D232B"
            newsletter.querySelector(".newsletter .newsletter-image h2").style.color = "white"
            newsletter.querySelector(".newsletter h3").style.color = "white"
            footer.classList.add("dark_bg")
            footer_bot.classList.add("dark_footer")
            footer_container.classList.add("dark_footer")
            document.querySelectorAll(".connexion a").forEach(e => {
                e.style.color = "white"
            })
            logo.src = "/Homepage-assets/Blanc(dark).png"
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
            category_police.forEach(ele => {
                ele.style.color ="initial"
            });
            newsletter.classList.remove("dark_newsletter-container")
            button.style.background = "#7CCCE9"
            newsletter.querySelector(".newsletter .newsletter-image h2").style.color = "initial"
            newsletter.querySelector(".newsletter h3").style.color = "initial"
            footer.classList.remove("dark_bg")
            footer_bot.classList.remove("dark_footer")
            footer_container.classList.remove("dark_footer")
            document.querySelectorAll(".connexion a").forEach(e => {
                e.style.color = "initial"
            })
            logo.src = "/Homepage-assets/logo blanc.png"
        }
    })
// Accessibility
    let accessibility_button = document.querySelector(".accessibility_button")
    let accessibility_menu = document.querySelector(".accessibility_menu")
    let close_button = document.querySelector(".close")
    let cursor = document.querySelector(".cursor")
    let taille = document.querySelector(".taille-de-police")
    let p = 0
    let t = 0
    let body = document.querySelectorAll("section")
    let contrast = document.querySelector(".contrast")

    // Ouverture/ Fermeture

    accessibility_button.addEventListener("click", function() {
        accessibility_menu.style.visibility = "visible"
        accessibility_button.style.visibility = "hidden"
    })
    close_button.addEventListener("click", function() {
        accessibility_menu.style.visibility = "hidden"
        accessibility_button.style.visibility = "visible"
    })

    // Fonctionnalités 
    // Faire un grand curseur
    cursor.addEventListener("click", function () {
        if (p == 0) {
            body.forEach(e => {
                e.classList.add("big_cursor")
                p = 1
            });
        }
        else {
            body.forEach(e => {
                e.classList.remove("big_cursor")
                p = 0
            });
        }
    })

    // Taille de police
    taille.addEventListener("click", function() {
        if (t == 0) {
            body.forEach(e => {
                e.classList.add("bigger_font")
                t = 1
            });
            document.querySelectorAll(".category span").forEach(x => {
                x.style.fontSize = "30px"
            })
            document.querySelector(".events_container h2").style.fontSize = "40px"
            document.querySelector(".moments_container p").style.fontSize = "40px"
            document.querySelector(".newsletter-image h2").style.fontSize = "60px"
            document.querySelector(".newsletter h3").style.fontSize = "34px"
            document.querySelectorAll(".contacts ul li").forEach(e => {
                e.style.fontSize = "24px"
            })
            document.querySelectorAll(".contacts h2").forEach(z => {
                z.style.fontSize = "27px"
            })
        }
        else {
            body.forEach(e => {
                e.classList.remove("bigger_font")
                t = 0
            });
            document.querySelectorAll(".category span").forEach(x => {
                x.style.fontSize = "initial"
            })
            document.querySelector(".events_container h2").style.fontSize = "30px"
            document.querySelector(".moments_container p").style.fontSize = "30px"
            document.querySelector(".newsletter-image h2").style.fontSize = "50px"
            document.querySelector(".newsletter h3").style.fontSize = "24px"
            document.querySelectorAll(".contacts ul li").forEach(e => {
                e.style.fontSize = "14px"
            })
            document.querySelectorAll(".contacts h2").forEach(z => {
                z.style.fontSize = "17px"
            })
        }
    })
    let body_contrast = document.querySelector("body")
    contrast.addEventListener("click", function() {
        if (t == 0) {
            body_contrast.style.filter = "contrast(1.5)"
            t = 1
        }
        else {
            body_contrast.style.filter = "initial"
            t = 0
        }
    })




})
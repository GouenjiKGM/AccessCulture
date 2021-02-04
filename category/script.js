window.addEventListener("DOMContentLoaded", function() {

    function filter() {
        // On définit les différentes variables de recherches
        let Filtervalue, input, ul,li,i;

        // Input qui sera la recherche, Filter qui sera la valeur de l'input
        // Ul qui sera la grande liste comparable a une div
        // li qui sera les élements de la liste et qu'on va sélectionner

        input = document.querySelector("#search")
        Filtervalue = input.value.toUpperCase();
        ul = document.querySelector(".category_items_container")
        li = ul.querySelectorAll(".item")

        // Pour i qui est inférieur aux nombres d'élements li
        // On va rechercher les span 
        // Et on dira que si ces élements en fonction du I qui tourne dans le compteur
        // on les met en majuscule et on les compare a la valeur qu'on tape
        // Ceux qui ne correspondent pas on let met en display none; et celle qui correspondent on les affichent :)
        for(i=0; i<li.length; i++) {
            console.log(li[i].querySelector('.item > span').innerHTML.toUpperCase().indexOf(Filtervalue))
            if(li[i].querySelector('.item > span').innerHTML.toUpperCase().indexOf(Filtervalue) > -1) {
                li[i].style.visibility = "";
                li[i].style.order = "1";
            }
            else {
                li[i].style.visibility = "hidden";
                li[i].style.order = "2";
                
            }
        }
    }

    let search = document.querySelector("#search")
    
    search.addEventListener("keyup", function() {
        // document.querySelector("li").style.display = "none"
        filter();
    } )


    // Variables selection
    let categories_search = document.querySelector("#categories")
    let types_search = document.querySelector("#types")


    categories_search.addEventListener("change", function () {
        let Categories_value = categories_search.options[categories_search.selectedIndex].text 
        let ul = document.querySelector(".category_items_container")
        let li = ul.querySelectorAll(".item")
        for(i=0; i<li.length; i++) {
            console.log(Categories_value.toUpperCase())
            console.log(Categories_value.toUpperCase() === li[i].querySelector('.item .item-image p > span').innerHTML.toUpperCase())
            if(Categories_value.toUpperCase() === li[i].querySelector('.item .item-image p > span').innerHTML.toUpperCase()) {
                li[i].style.visibility = "visible"
                li[i].style.order = "-1"
            }
            else {
                li[i].style.visibility = "hidden"
                li[i].style.order = "2"
            }
        }
    })


    // Dark Mode
    let header = document.querySelector("header")
    let logo = document.querySelector(".header_logo ul li a:first-child img")
    let section = document.querySelectorAll("section")
    let footer_container = document.querySelector(".footer_container")
    let footer_bot = document.querySelector(".footer-bot")
    let footer = document.querySelector("footer")
    let header_police = document.querySelectorAll(".header_logo ul li a")
    let filters_police = document.querySelectorAll(".item > span")
    let numbers_a = document.querySelectorAll(".numbers a")
    let pagination = document.querySelectorAll(".pagination svg")

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
            footer.classList.add("dark_bg")
            footer_bot.classList.add("dark_footer")
            footer_container.classList.add("dark_footer")
            filters_police.forEach(el => {
                el.style.color = "white"
            });
            categories_search.classList.add("dark_search_bg")
            types_search.classList.add("dark_search_bg")
            search.style.background = "#252C36"
            numbers_a.forEach(a => {
                a.style.color = "#FFFFFF"
            });
            pagination.forEach(p => {
                p.style.fill = "#FFFFFF"
            });
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
            filters_police.forEach(el => {
                el.style.color = "black"
            });
            footer.classList.remove("dark_bg")
            footer_bot.classList.remove("dark_footer")
            footer_container.classList.remove("dark_footer")
            categories_search.classList.remove("dark_search_bg")
            types_search.classList.remove("dark_search_bg")
            search.style.background = ""
            numbers_a.forEach(a => {
                a.style.color = ""
            });
            pagination.forEach(p => {
                p.style.fill = ""
            });
        }
    })






})
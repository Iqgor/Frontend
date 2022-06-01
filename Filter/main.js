let allgames = document.getElementsByClassName("game");




let filters = document.getElementsByClassName("filter")

for (let i = 0; i < filters.length; i++) {
    filters[i].checked = true;
}

let shootingfilter = document.getElementById("checkbox-shooting")
shootingfilter.onchange = function () {
    if (shootingfilter.checked === true) {
        for (let i = 0; i < allgames.length; i++){
            if (allgames[i].dataset.category === "shooting") {
                allgames[i].style.display = "block"
            }
        }   
    }
    else {
        for (let i = 0; i < allgames.length; i++){
            if (allgames[i].dataset.category === "shooting") {
                allgames[i].style.display = "none"
            }
        } 
    }
}

let racingfilter = document.getElementById("checkbox-racing")
racingfilter.onchange = function () {
    if (racingfilter.checked === true) {
        for (let i = 0; i < allgames.length; i++){
            if (allgames[i].dataset.category === "racing") {
                allgames[i].style.display = "block"
            }
        }   
    }
    else {
        for (let i = 0; i < allgames.length; i++){
            if (allgames[i].dataset.category === "racing") {
                allgames[i].style.display = "none"
            }
        } 
    }
}

let adventurefilter = document.getElementById("checkbox-adventure")
adventurefilter.onchange = function () {
    if (adventurefilter.checked === true) {
        for (let i = 0; i < allgames.length; i++){
            if (allgames[i].dataset.category === "adventure") {
                allgames[i].style.display = "block"
            }
        }   
    }
    else {
        for (let i = 0; i < allgames.length; i++){
            if (allgames[i].dataset.category === "adventure") {
                allgames[i].style.display = "none"
            }
        } 
    }
}

window.scrollTo(0,0)
setInterval(function () {
    document.getElementsByTagName("body")[0].style.overflow = "auto"
}, 1500)




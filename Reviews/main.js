let arrowbutton = document.getElementsByClassName("arrow")
let reviews = document.getElementsByClassName("review")

let mode = "one-to-three"

for (let i = 0; i < arrowbutton.length; i++) {
    arrowbutton[i].onclick = function () {
        if (mode === "one-to-three") {
            reviews[0].style.display = "none"
            reviews[1].style.display = "none"
            reviews[2].style.display = "none"
            reviews[3].style.display = "block"
            reviews[4].style.display = "block"
            reviews[5].style.display = "block"
            mode = "four-five-six"

        }
        else{
            reviews[0].style.display = "block"
            reviews[1].style.display = "block"
            reviews[2].style.display = "block"
            reviews[3].style.display = "none"
            reviews[4].style.display = "none"
            reviews[5].style.display = "none"
            mode = "one-to-three"
        }


    }
}
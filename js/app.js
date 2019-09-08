var numOfMadeClicks = 0;

var elem = document.getElementById("catImg");
elem.addEventListener("click", function() {
    numOfMadeClicks += 1;
    document.getElementsByClassName("numOfClicks")[0].innerHTML = numOfMadeClicks;
}, false);


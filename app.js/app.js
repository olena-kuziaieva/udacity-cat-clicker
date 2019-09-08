var numOfMadeClicks = 0;

var elem = document.getElementById("catImg");
elem.addEventListener("click", function() {
    numOfMadeClicks += 1;
    elem.innerHTML = numOfMadeClicks;
}, false);


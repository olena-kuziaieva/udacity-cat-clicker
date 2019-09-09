var catFirst = {name: "Fluffy", clicks: 0};
var catSecond = {name: "Muffy", clicks: 0};

document.getElementById("catName1").innerHTML = "Cat name: " + catFirst.name;
document.getElementById("catName2").innerHTML = "Cat name: " + catSecond.name;

var cat1Element = document.getElementById("cat1Img");
cat1Element.addEventListener("click", function (e) {
    catFirst.clicks += 1;
    e.currentTarget.getElementsByClassName("numOfClicks")[0].innerHTML = catFirst.clicks;
}, false);

var cat2Element = document.getElementById("cat2Img");
cat2Element.addEventListener("click", function (e) {
    catSecond.clicks += 1;
    e.currentTarget.getElementsByClassName("numOfClicks")[0].innerHTML = catSecond.clicks;
}, false);


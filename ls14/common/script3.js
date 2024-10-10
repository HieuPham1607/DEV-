const time = new Date().getHours();
let gretting;
if (time < 18) {
    gretting = "Goodmoring";
} else if (time < 20) {
    gretting = "GoodDay";
} else {
    gretting = "GoodEvening";
}
document.getElementById("demo").innerHTML = gretting;
var buttonClick = false;
var start = new Date().getTime();
var best = 100


document.getElementById("iButtons").onclick = function() {
    
    var end = new Date().getTime();

    var timeTaken = (end - start) / 1000;

    

    if (timeTaken < best ) {
        best = timeTaken
    }

    document.getElementById("iButtons").style.display = "none";

    document.getElementById("time").innerHTML = timeTaken + "s";

    document.getElementById("best").innerHTML = best + "s";

    appearAfter();
}

function shapeCreate() {

    var vHeight = Math.floor((Math.random() * 150) +20);

    var color = ["red", "blue", "orange", "yellow", "purple", "green", "black"];
    var sColor = document.getElementById("iButtons").style.backgroundColor;
    var radius = ["0", "50"];
    var c = Math.floor(Math.random() * 8)

    var b = Math.floor(Math.random() * 3)

    
    document.getElementById("iButtons").style.borderRadius = radius[b] + "%";
    
    
    document.getElementById("iButtons").style.backgroundColor = color[c];
    

    document.getElementById("iButtons").style.marginTop = Math.floor(Math.random() * 25) + "%";

    document.getElementById("iButtons").style.marginLeft = Math.floor(Math.random() * 75) + "%";

    document.getElementById("iButtons").style.height = vHeight + "px";

    document.getElementById("iButtons").style.width = vHeight + "px";

    document.getElementById("iButtons").style.display = "block";

    start = new Date().getTime();

}

function appearAfter() {

    setTimeout(shapeCreate, Math.random() * 3000);

}

appearAfter();

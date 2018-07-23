var array = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", ""];
var numberArray = {"one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16};
var sixteen = 15;

function shuffle() {
    random = array.slice();
    for (var x = 0; x < 100; x++) {
        var arrayMove = Math.floor((Math.random() * 4));
        while(direction[sixteen][arrayMove] != 1) {
            arrayMove = Math.floor((Math.random() * 4));
        }
        var directTo;
        switch(arrayMove) {
            case 0: directTo = sixteen - 4;
            break;
            case 1: directTo = sixteen + 4;
            break;
            case 2: directTo = sixteen - 1;
            break;
            case 3: directTo = sixteen + 1;
            break;
        }
               
    var rand = random[sixteen];
    random[sixteen] = random[directTo];
    random[directTo] = rand;
    sixteen = directTo;
    }

    interface();
}

function interface() {
    document.getElementById("table").innerHTML = "";
    for (var x = 0; x < random.length; x++) {
        if (random[x] == "") {
            document.getElementById("table").innerHTML += '<div id="sixteen" class="box"></div>';
        } 
        else {
            var arrayName = random[x];
            document.getElementById("table").innerHTML += '<div id="' + random[x] + '" class="box' + " " + backgroundImg + '">' + numberArray[arrayName] + '</div>';
        }
    }

var tileInteract;
if (direction[random.indexOf("")][0] == 1) {
    tileInteract = random.indexOf("") - 4;
    document.getElementById(random[tileInteract]).className += " interaction ";
    document.getElementById(random[tileInteract]).setAttribute("onclick", "tileSwap(" + tileInteract + ", " + random.indexOf("") + ")");
}
if (direction[random.indexOf("")][1] == 1) {
    tileInteract = random.indexOf("") + 4;
    document.getElementById(random[tileInteract]).className += " interaction ";
    document.getElementById(random[tileInteract]).setAttribute("onclick", "tileSwap(" + tileInteract + ", " + random.indexOf("") + ")");
}
if (direction[random.indexOf("")][2] == 1) {
    tileInteract = random.indexOf("") - 1;
    document.getElementById(random[tileInteract]).className += " interaction ";
    document.getElementById(random[tileInteract]).setAttribute("onclick", "tileSwap(" + tileInteract + ", " + random.indexOf("") + ")");
}
if (direction[random.indexOf("")][3] == 1) {
    tileInteract = random.indexOf("") + 1;
    document.getElementById(random[tileInteract]).className += " interaction ";
    document.getElementById(random[tileInteract]).setAttribute("onclick", "tileSwap(" + tileInteract + ", " + random.indexOf("") + ")");
}
}

var numberofmoves = 0;
var direction = [[0, 1, 0, 1], [0, 1, 1, 1], [0, 1, 1, 1], [0, 1, 1, 0],
                [1, 1, 0, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 0], 
                [1, 1, 0, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 0], 
                [1, 0, 0, 1], [1, 0, 1, 1], [1, 0, 1, 1], [1, 0, 1, 0]];

function tileAnimation(emptySpace, tileInteract) {
    if (emptySpace - 4 == tileInteract) {
        console.log(random[emptySpace]);
        document.getElementById(random[emptySpace]).className += " up ";
    } else if (emptySpace + 4 == tileInteract) {
        document.getElementById(random[emptySpace]).className += " down ";
    } else if (emptySpace -1 == tileInteract) {
        document.getElementById(random[emptySpace]).className += " left ";
    } else if (emptySpace + 1 == tileInteract) {
        document.getElementById(random[emptySpace]).className += " right ";
    }
}

function tileSwap(emptySpace, tileInteract) {
    tileAnimation(emptySpace, tileInteract);
    setTimeout(function() {
        var rand = random[emptySpace];
        random[emptySpace] = random[tileInteract];
        random[tileInteract] = rand;
        numberofmoves++;
        interface();
        completed();
    }, 750);
}

var backgroundImg;
var background = ["sonic", "knuckles", "shadow", "miles"];

function backgroundimages() {
    var img = document.getElementById("images").value;
    if (background.indexOf(img) < 0) {
        return;
    }
    backgroundImg = img;
    document.getElementById("table").innerHTML = "";
    for (var x = 0; x < array.length; x++) {
        if (array[x] == "") {
            document.getElementById("table").innerHTML += '<div id="sixteen" class="box"></div>';
        } 
        else {
            var arrayName = array[x];
            document.getElementById("table").innerHTML += '<div id="' + array[x] + '" class="box' + " " + backgroundImg + '">' + numberArray[arrayName] + '</div>';
        }
    }
}

function body() {
    var backgroundArray = Math.floor((Math.random() * 4));
    backgroundImg = background[backgroundArray];
    document.getElementById(background[backgroundArray]).selected = true;
    for (var x = 0; x < array.length - 1; x++) {
        document.getElementById(array[x]).className = "box " + background[backgroundArray];
    }
}

var startTime = new Date();

function completed() {
    if (array.toString() == random.toString()) {
        var endTime = new Date();
        var time = endTime - startTime;
        var seconds = Math.round(time / 1000);
        var html = "";
        alert("Good Job! You completed the puzzle!");
        html += "<p>Total number of moves to complete: " + numberofmoves + "</p>";
        html += "<p>Total time to complete: " + seconds + " seconds</p>";
        document.getElementById("complete").innerHTML = html;
    }
}

status = "";
objects = [];
find = document.getElementById("object");
function preload(){
    
}

function setup(){
    canvas = createCanvas(400, 400)
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
}

function gotResults(error, results){
    //Showing results/error on the console
    if(error){
        console.log(error);
    }else{
        console.log(results);
        objects = results;
    }
}

function draw(){
    //Placing the video
    image(video, 0, 0, 400, 400);
    if(status != ""){
        //starting gotResults
        if(object[i].label == find){
        objectDetector.detect(video, gotResults);
        document.getElementById("result").innerHTML = "Found!";
    }
    }
}

function search(){
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Finding Object..."
}

function modelLoaded(){
    console.log("Model Loaded.");
    status = true
}
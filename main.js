status = "";
object = "";

function setup()
{
    canvas = createCanvas(450, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 480, 430);
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Object Detected";
    object = document.getElementById("object_input").value;
    console.log(object);
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
}
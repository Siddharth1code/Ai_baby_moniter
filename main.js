img="";
status="";
object=[];
song="";
function preload()
{
    
}
function setup() 
{
    canvas = createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector =ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= "Status: object Detecting";
}

function modelLoaded()
{
    console.log("model loaded");
    status=true;
}

function gotResults(error,results)
{
    if(error)
    {
        console.log("error");
    }
    console.log(results);
    object=results;
}

function draw() 
{
    image(video,0,0,380,380);

    if(status!="")
{
    r=random(255);
    g=random(255);
    b=random(255);
    objectDetector.detect(video,gotResults);

    for(i=0;i<object.length;i++)
    {
        document.getElementById("status").innerHTML="Status: Object detected";
        document.getElementById("number_of_object").innerHTML="Number of person detected are "+object.length;
        fill(r,g,b);
        peresent=floor(object[i].confidence*100);
        text(object[i].label+" "+peresent+" % ",object[i].x+ 15, object[i].y + 15);
        noFill();
        stroke(r,g,b);
        rect(object[i].x ,object[i].y , object[i].width ,object[i].height);
    }
}

if(objec[i].label != "person")
{
    song= loadSound('sister_alert.mp3');   
    document.getElementById("detected").innerHTML="You baby is not there in the room.";
}

}
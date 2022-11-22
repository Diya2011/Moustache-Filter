var nosex=0
var nosey=0
function preload(){
clownnose=loadImage("moustache.png")
}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
posenet = ml5.poseNet(video,modelloaded)
posenet.on('pose',gotposes)
}

function modelloaded(){
    console.log('PostNet Is Intialized')
}
function gotposes(results){
    if (results.length>0) {
        console.log(results)
        nosex=results[0].pose.nose.x-10
        nosey=results[0].pose.nose.y+10
    }
}
function draw(){
    image(video, 0,0,300,300)
    image(clownnose,nosex,nosey,30,20)
    }
    function takesnapshot(){
        save("mypicture.png")
    }
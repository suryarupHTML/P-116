nose_x1 = 0;
nose_y1 = 0;
nose_x2 = 0;
nose_y2 = 0;

function preload() {
    m = loadImage('https://i.postimg.cc/NM8zvWf0/aaa.png');
    s = loadImage('https://i.postimg.cc/Hk47BXBK/sunglasses-PNG125.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(m, nose_x1, nose_y1, 50, 50);
    image(s, nose_x2, nose_y2, 80, 80);
}

function take_snapshot() {
    save('my filtr image.png');
}

function modelLoaded() {
    console.log("poseNet is initialised");
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        nose_x1 = results[0].pose.nose.x - 25;
        nose_y1 = results[0].pose.nose.y - 10;
        nose_x2 = results[0].pose.nose.x - 40;
        nose_y2 = results[0].pose.nose.y - 55;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
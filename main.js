function preload() {

}

function setup() {
    Canvas = createCanvas(400, 400);
    Canvas.position(700, 300);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video,0,0,400,400);
    tint(tint_color);
}


function take_snapshot() {
    save("student_name.png");
}
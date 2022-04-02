function preload(){

}
function setup(){
    video = createCapture(VIDEO);
}
function draw(){
    image(video, 200, 400, 600, 800);
}
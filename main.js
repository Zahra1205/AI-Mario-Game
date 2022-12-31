function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");

    	pose= ml5.poseNet(video, modelLoaded);
		pose.on("pose", gotPoses);
}
function gotPoses(results){
if(results.length>0){
	console.log(results);
	noseX = results[0].nose.x;
	noseY = results[0].nose.y;
}
}
function modelLoaded(){
	console.log("Model Loaded");
}
function draw() {
	game()
}






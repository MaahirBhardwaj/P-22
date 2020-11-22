var bullet1
var bullet2
var line
function setup() {
  createCanvas(1200,800);
 bullet1 = createSprite(1100,700,50,50);
 bullet2 = createSprite(250,700,50,50);
 line = createSprite(600,400,20,1200);
function draw() {
  background("black"); 
 
  drawSprites()
}

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = "img/bg.png";

// Hero Image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
  heroReady = true;
};
heroImage.src = "img/hero1.png";

// Treasure Image
var treasureReady = false;
var treasureImage = new Image();
treasureImage.onload = function () {
  treasureReady = true;
};
treasureImage.src = "img/gold.png";

// Game objects
var hero = {
  speed: 256, // movement in pixels per second
  x: 0,
  y: 0
};
var treasure = {
  x: 0,
  y: 0
};
var treasuresCaught = 0;

// Handle keyboard controls
var keysDown = {};
$(window).keydown(function(e){ keysDown[e.keyCode] = true; });
$(window).keyup  (function(e){ delete keysDown[e.keyCode]; });

// Reset the game when the player catches a treasure
var reset = function () {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;

  // Throw the treasure somewhere on the screen randomly
  treasure.x = 32 + (Math.random() * (canvas.width - 64));
  treasure.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
var update = function (modifier) {
  if (38 in keysDown) hero.y -= hero.speed * modifier; // up
  if (40 in keysDown) hero.y += hero.speed * modifier; // down
  if (37 in keysDown) hero.x -= hero.speed * modifier; // left
  if (39 in keysDown) hero.x += hero.speed * modifier; // right

  // Are they touching?
  if (
    hero.x <= (treasure.x + 32)
    && treasure.x <= (hero.x + 32)
    && hero.y <= (treasure.y + 32)
    && treasure.y <= (hero.y + 32)
  ) {
    ++treasuresCaught;
    reset();
  }
};

// Draw everything
var render = function () {

  // images
  if (bgReady)      ctx.drawImage(bgImage, 0, 0);
  if (heroReady)    ctx.drawImage(heroImage, hero.x, hero.y);
  if (treasureReady) ctx.drawImage(treasureImage, treasure.x, treasure.y);

  // score
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Gold collected: " + treasuresCaught, 32, 32);
};

// The main game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;

  // Request to do this again ASAP
  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var requestAnimationFrame =
     window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame
  || window.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();
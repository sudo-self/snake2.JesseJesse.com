//tested on Safari,chrome, and edge
//free to customize or modify
//total time: 5 hours
//You Can Find Me On Instagram: @JR85er












var canvas = document.querySelector('canvas');
var ah = 100
var aw = 50
canvas.width = window.innerWidth - aw ;
canvas.height = window.innerHeight - ah;
var display = document.getElementsByTagName('h3');
var ctx  = canvas.getContext('2d');
var grid = 16;
var count = 0;
var score = 0;
var level = 4;
var levelC = 0;
var attempt = 0;
var highScore = 0;
var snake = {
  x: 160,
  y: 160,
  dx: grid,
  dy: 0,
  cells: [],
  maxCells: 4
};
var apple = {
  x: 320,
  y: 320
};



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function startGame() {

  requestAnimationFrame(startGame);
  if (++count < level ) {
    return;
  }
  count = 0;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  snake.x += snake.dx;
  snake.y += snake.dy;
  
  snake.cells.unshift({x: snake.x, y: snake.y});
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
    
  }

  ctx.fillStyle = '#006622';
  ctx.fillRect(apple.x, apple.y, grid-1, grid-1);

  ctx.fillStyle = '#999999';
 
  snake.cells.forEach(function(cell, index) {
    

    ctx.fillRect(cell.x, cell.y, grid-1, grid-1);  
    
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
        score = score +5;
         level =  level - 0.10;
          levelC++;
        apple.x = getRandomInt(0, (canvas.width / 25)) *grid;
       apple.y = getRandomInt(0, (canvas.height/ 25)) * grid;
       display[0].innerHTML=("Score:"+score);
      display[3].innerHTML=("Level:"+levelC);
       
    }
    for (var i = index + 1; i < snake.cells.length; i++) {
      
      if (snake.x < 0 || snake.x >= canvas.width || snake.y < 0 ||snake.y >= canvas.height  || cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
          reset();
        init();
      }
  
    }
 
  });

}

document.addEventListener('keydown', function(e) {
//left and a  
  if (e.which === 37 || e.which === 65) {
     if(snake.dx === 0){
    snake.dx = -grid;
    snake.dy = 0;
    }
  }
  //up and w 
  else if (e.which === 38 || e.which === 87) {
    if(snake.dy === 0){
    snake.dy = -grid;
    snake.dx = 0;
  }}
  //right and d
  else if (e.which === 39 || e.which === 68 ) {
    if(snake.dx === 0){
    snake.dx = grid;
    snake.dy = 0;
  }
  }
  // down and s
  else if (e.which === 40 || e.which === 83 && snake.dy === 0) {
    if(snake.dy === 0){
    snake.dy = grid;
    snake.dx = 0;
  }}
});
function reset (){
  
         //  console.log("in reset")
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid ;
        apple.y = getRandomInt(0, 25) * grid  ;
        //console.log("Game Over")
        if(score >= highScore || highScore == ''){
        highScore = score}
        attempt++
        //console.log(highScore)
        score = 0;
        level = 5;
        levelC = 0;
  display[0].innerHTML=("Score:"+ score);
  display[3].innerHTML=("Level:"+ levelC);
  display[1].innerHTML=("highScore:"+ highScore);
  display[2].innerHTML=("attempt:"+ attempt);
        //console.log("Calling reset")
}
function init(){
//console.log("in init")
let temp = ctx.getImageData(0,0,canvas.width,canvas.height)   
canvas.width = window.innerWidth - aw;
canvas.height = window.innerHeight  - ah;
 ctx.putImageData(temp,0,0) 

}


//window.addEventListener('resize', init);


// Touch Test
let pageWidth = window.innerWidth || document.body.clientWidth;
let treshold = Math.max(1,Math.floor(0.01 * (pageWidth)));
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const limit = Math.tan(45 * 1.5 / 180 * Math.PI);
//const gestureZone = document.getElementById('modalContent');

canvas.addEventListener('touchstart', function(event) {
    event.preventDefault()  
  touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

canvas.addEventListener('touchend', function(event) {
      event.preventDefault()
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture(event);
}, false);

function handleGesture(e) {
    let x = touchendX - touchstartX;
    let y = touchendY - touchstartY;
    let xy = Math.abs(x / y);
    let yx = Math.abs(y / x);
    if (Math.abs(x) > treshold || Math.abs(y) > treshold || snake.dx === 0 ) {
        if (yx <= limit) {
            if (x < 0) {
                console.log("left");
              if (snake.dx === 0){ 
              snake.dx = -grid;
               snake.dy = 0;};
            } else {
                console.log("right");
              if (snake.dx === 0){
              snake.dx = grid;
               snake.dy = 0;}
            }
        }
        if (xy <= limit) {
            if (y < 0 ) {
                console.log("top");
              if (snake.dy === 0){
              
              snake.dy = -grid;
                    snake.dx = 0;}
            } else {
           
              console.log("bottom");
              if (snake.dy === 0){
                 snake.dy = grid;
                snake.dx = 0;
            }}
        }
    } else {
        console.log("tap");
    }
}
//













//Instruction
function check(){
//if(window.innerHeight > window.innerWidth){
 //   alert("Please use Landscape! Mode");
//}
 // else {
  
  init()
  

  //init()
//}
}

document.addEventListener('DOMContentLoaded', function() {
  alert("Welcome to Jesse's Snake Two! iOS and Android Swipe Edition!  Swipe UP (w), Swipe Down (s), Swipe Left (a), Swipe Right (d) Hint: Turn your device landscape for best performance (sideways)   Developer @JR85er");
  
check();
requestAnimationFrame(startGame);


}, false);


//if (window.DeviceOrientationEvent) {
//    window.addEventListener('orientationchange', function() { check(); }, false);
//}

window.onresize = function (event) {
  check();
}
//requestAnimationFrame(startGame)
requestAnimationFrame(startGame);

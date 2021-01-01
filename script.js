var square

function setup(){
  createCanvas(700, 700)
}

function draw(){
  background(230)
  square = createSprite(10, 10)

  squareImg = loadImage('assets/square.png')

  square.addImage(squareImg)

  if (keyDown('Up')){
    square.position.y += 5
  }
  if (keyDown('Down')){
    square.position.y -= 5
  }
  if (keyDown('Left')){
    square.position.x -= 5
  }
  if (keyDown('Right')){
    square.position.y += 5
  }
}

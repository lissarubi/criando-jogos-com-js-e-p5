var square
var circle

function setup(){
  createCanvas(700, 700)
  square = createSprite(350, 350)
  squareImg = loadImage('https://raw.githubusercontent.com/edersonferreira/criando-jogos-com-js-e-p5/main/src/assets/square.png')
  square.addImage(squareImg)

  setInterval(createEnemy, 1500)
}

function createEnemy(){
  positions = [[700, 0], [0, 700], [700, 700], [0, 700]]
  positionRandom = positions[Math.floor(Math.random() * positions.length)];
  circle = createSprite(positionRandom[0], positionRandom[1])
  circleImg = loadImage('https://raw.githubusercontent.com/edersonferreira/criando-jogos-com-js-e-p5/main/src/assets/circle.png')
  circle.addImage(circleImg)
  circle.attractionPoint(13, square.position.x, square.position.y)
}

function finishGame(){
  square.remove()
  alert('Você Perdeu!')
  window.location.reload()
}

function draw(){
  background(230)

  try{
    square.collide(circle, finishGame)
  }catch(err){}

  if (keyDown('W')){
    square.position.y -= 5
  }
  if (keyDown('S')){
    square.position.y += 5
  }
  if (keyDown('A')){
    square.position.x -= 5
  }
  if (keyDown('D')){
    square.position.x += 5
  }

  drawSprites()
}

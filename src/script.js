var square

function setup(){
  createCanvas(700, 700)
  square = createSprite(450, 450)
  squareImg = loadImage('https://raw.githubusercontent.com/edersonferreira/criando-jogos-com-js-e-p5/main/src/assets/square.png')
  square.addImage(squareImg)
}

function draw(){
  background(230)



//   if (keyDown('W')){
//     square.position.y -= 5
//   }
//   if (keyDown('S')){
//     square.position.y += 5
//   }
//   if (keyDown('A')){
//     square.position.x -= 5
//   }
//   if (keyDown('D')){
//     square.position.x += 5
//   }

  drawSprites()
}

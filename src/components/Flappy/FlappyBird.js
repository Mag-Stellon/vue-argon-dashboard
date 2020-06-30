class FlappyBird {
  constructor(context, canvas, win) {
    this.ctx = context
    this.cvs = canvas
    this.win = win;

    this.bird = new Image()
    this.bg = new Image()
    this.fg = new Image()
    this.pipeNorth = new Image()
    this.pipeSouth = new Image()

    this.bird.src = 'img/flappy/bird.png'
    this.bg.src = 'img/flappy/bg.png'
    this.fg.src = 'img/flappy/fg.png'
    this.pipeNorth.src = 'img/flappy/pipeNorth.png'
    this.pipeSouth.src = 'img/flappy/pipeSouth.png'

    this.scor = 0

    this.gap = 100
    this.bX = 10
    this.bY = 150
    this.gravity = 1

    this.pipes = [{
      x: canvas.width,
      y: 0
    }]
  }

  getGap() {
    return this.pipeNorth.height + this.gap
  }

  getHeigth() {
    return this.cvs.height
  }

  getWidth() {
    return this.cvs.width
  }

  fly() {
    this.bY -= 25
  }

  draw() {

    const go = () => {
      this.drawBg()

      let collision = this.drawPipes()
  
      this.drawFg()
  
      this.drawBird(this.bX, this.bY)
  
      this.bY += this.gravity

      // this.drawScore()

      collision ? this.win() : requestAnimationFrame(go);
    }

    go()

  }

  drawPipes() {
    let collision = false;
    for (let i = 0; i < this.pipes.length; i++) {
      this.drawPipeNorth(this.pipes[i].x, this.pipes[i].y)
      this.drawPipeSouth(this.pipes[i].x, this.pipes[i].y+this.getGap())
    
      this.pipes[i].x--

      if ( this.pipes[i]. x == 125 ) {
        this.pipes.push({
          x: this.cvs.width,
          y: Math.floor(Math.random() * this.pipeNorth.height) - this.pipeNorth.height
        })
      }

      if (!collision) collision = this.detectCollision(this.pipes[i].x, this.pipes[i].y)

      this.score(this.pipes[i].x)
    }

    return collision;
  }

  drawBird(x = 0, y = 0) {
    this.ctx.drawImage(this.bird, x, y)
  }

  drawBg() {
    this.ctx.drawImage(this.bg, 0, 0)
  }

  drawFg() {
    this.ctx.drawImage(this.fg, 0, this.getHeigth() - this.fg.height)
  }

  drawPipeNorth(x = 0, y = 0) {
    this.ctx.drawImage(this.pipeNorth, x, y)
  }

  drawPipeSouth(x = 0, y = 0) {
    this.ctx.drawImage(this.pipeSouth, x, y)
  }

  /*drawScore(x, y) {
    this.ctx.fillStyle = '#000'
    this.ctx.font = "20px verdana"
    this.ctx.fillText(`Score: ${this.scor}`, 40, this.cvs.height - 40)
  }*/

  detectCollision(x, y) {
    if (this.bX + this.bird.width >= x && this.bX <= x + this.pipeNorth.width &&
    (this.bY <= y + this.pipeNorth.height || this.bY + this.bird.height >= y + this.getGap())
    || this.bY + this.bird.height >= this.cvs.height - this.fg.height) {
      return true;
    }

    return false;
  }

  score(x) {
    if (x == 5) {
      this.scor++
    }
  }
}

export default FlappyBird

class stone {
  constructor(x,y){
    this.body = rectangle(x, y, options);
    this.image = loadImage("images/stone.png");
    this.body.scale = 0.2;
    World.add(world, this.body);
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
   
  }
}

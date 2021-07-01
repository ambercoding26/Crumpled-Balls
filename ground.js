class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
        isStatic: true
      };

      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.w = width;
      this.h = height;
      World.add(world, this.body);
    }


    show() {
      var pos = this.body.position;
      push();
      rectMode(CENTER);
      stroke (255);
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }
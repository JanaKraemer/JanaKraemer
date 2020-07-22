namespace Zauberbild { //horizontal fish
    export class Element {
        x: number;
        y: number;
        dx: number;
        dy: number;

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 20;
            this.dy = Math.random() * 1;
        }

        draw(): void {
           

            let circle: Path2D = new Path2D();
            circle.arc(525, 200, 25, 0, 360);
            crc.translate(canvas.width / 2, canvas.width / 2);
            crc.rotate(Math.PI / 180);
            crc.translate(-canvas.width / 2, -canvas.width / 2);
            crc.fillStyle = "red";
            crc.fill(circle);
            crc.stroke(circle);

            console.log("rotation rot");
            //console.log("move");


        }
        update(): void {
            //this.move();
            this.draw();
        }

        //move(): void {
          //  this.x += this.dx;
            //this.dx = this.dx * -1;
            //if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {

              //  this.x = 600;
                //this.y = canvas.height * Math.random();
           // }
        //}

    }
}

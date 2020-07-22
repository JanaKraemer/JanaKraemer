namespace Zauberbild { //horizontal fish
    export class Move {
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
            crc.fillStyle = "green";
            crc.fill(circle);
            crc.stroke(circle);

            console.log("move me");


        }
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {

                this.x = 600;
                //this.y = canvas.height * Math.random();
            }

            console.log("moooooove");

            
        }

    }
}

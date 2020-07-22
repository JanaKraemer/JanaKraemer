namespace Zauberbild {

    export class Kreis extends Element {
        
        constructor() {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 0;
            this.dy = Math.random() * 2;
        }

        draw(): void {
            let blase: Path2D = new Path2D();
            blase.arc(this.x, this.y - 50, 10, 0, 360);
            crc.strokeStyle = "white";

            crc.stroke(blase);

            let blase2: Path2D = new Path2D();
            blase2.arc(this.x + 70, this.y - 70, 20, 0, 360);
            crc.strokeStyle = "white";

            crc.stroke(blase2);
           // super.draw();
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {

                this.x = canvas.width * Math.random();
                this.y = 0;
            }
        }

    }
}

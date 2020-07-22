namespace Zauberbild { //horizontal fish
    export class Eck {
        x: number;
        y: number;
        dx: number;
        dy: number;
        speed: number;

        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 20;
            this.dy = Math.random() * 1;
            this.speed = 3;
        }

        draw(): void {
            

            let segel: Path2D = new Path2D();
            segel.moveTo(260, 380);
            segel.lineTo(300, 350);
            segel.lineTo(300, 400);
            crc.fillStyle = "orange";
            crc.fill(segel);
            crc.stroke(segel);
        }

        update(): void {
            //this.move();
            this.draw();
        }

        move(): void {
            //requestAnimationFrame(animate);
            this.x += this.speed;
            if (this.x <= 0 || this.x >= 475) {
                this. speed = this.speed * -1;
                // y = y + 10; so könnte das Objekt am Ende einer Zeile eine Zeile nach unten gehen
            }
            
        }


        //document.addEventListener("DOMContentLoaded", function () {
        //  animate();
        //});
        //}());
    }
}

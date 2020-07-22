var Zauberbild;
(function (Zauberbild) {
    class Kreis extends Zauberbild.Element {
        constructor() {
            super();
            this.x = Math.random() * Zauberbild.canvas.width;
            this.y = Math.random() * Zauberbild.canvas.height;
            this.dx = Math.random() * 0;
            this.dy = Math.random() * 2;
        }
        draw() {
            let blase = new Path2D();
            blase.arc(this.x, this.y - 50, 10, 0, 360);
            Zauberbild.crc.strokeStyle = "white";
            Zauberbild.crc.stroke(blase);
            let blase2 = new Path2D();
            blase2.arc(this.x + 70, this.y - 70, 20, 0, 360);
            Zauberbild.crc.strokeStyle = "white";
            Zauberbild.crc.stroke(blase2);
            // super.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > Zauberbild.canvas.width || this.x < 0 || this.y > Zauberbild.canvas.height || this.y < 0) {
                this.x = Zauberbild.canvas.width * Math.random();
                this.y = 0;
            }
        }
    }
    Zauberbild.Kreis = Kreis;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=constructorcircle.js.map
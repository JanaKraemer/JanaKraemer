var Zauberbild;
(function (Zauberbild) {
    class Eck {
        constructor() {
            this.x = Math.random() * Zauberbild.canvas.width;
            this.y = Math.random() * Zauberbild.canvas.height;
            this.dx = Math.random() * 20;
            this.dy = Math.random() * 1;
            this.speed = 3;
        }
        draw() {
            let segel = new Path2D();
            segel.moveTo(260, 380);
            segel.lineTo(300, 350);
            segel.lineTo(300, 400);
            Zauberbild.crc.fillStyle = "orange";
            Zauberbild.crc.fill(segel);
            Zauberbild.crc.stroke(segel);
        }
        update() {
            //this.move();
            this.draw();
        }
        move() {
            //requestAnimationFrame(animate);
            this.x += this.speed;
            if (this.x <= 0 || this.x >= 475) {
                this.speed = this.speed * -1;
                // y = y + 10; so könnte das Objekt am Ende einer Zeile eine Zeile nach unten gehen
            }
        }
    }
    Zauberbild.Eck = Eck;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=eck.js.map
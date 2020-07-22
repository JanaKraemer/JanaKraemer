var Zauberbild;
(function (Zauberbild) {
    class Move {
        constructor() {
            this.x = Math.random() * Zauberbild.canvas.width;
            this.y = Math.random() * Zauberbild.canvas.height;
            this.dx = Math.random() * 20;
            this.dy = Math.random() * 1;
        }
        draw() {
            let circle = new Path2D();
            circle.arc(525, 200, 25, 0, 360);
            Zauberbild.crc.fillStyle = "green";
            Zauberbild.crc.fill(circle);
            Zauberbild.crc.stroke(circle);
            console.log("move me");
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > Zauberbild.canvas.width || this.x < 0 || this.y > Zauberbild.canvas.height || this.y < 0) {
                this.x = 600;
                //this.y = canvas.height * Math.random();
            }
            console.log("moooooove");
        }
    }
    Zauberbild.Move = Move;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=move.js.map
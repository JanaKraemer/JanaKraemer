var Zauberbild;
(function (Zauberbild) {
    class Element {
        constructor() {
            this.x = Math.random() * Zauberbild.canvas.width;
            this.y = Math.random() * Zauberbild.canvas.height;
            this.dx = Math.random() * 20;
            this.dy = Math.random() * 1;
        }
        draw() {
            let circle = new Path2D();
            circle.arc(525, 200, 25, 0, 360);
            Zauberbild.crc.fillStyle = "red";
            Zauberbild.crc.fill(circle);
            Zauberbild.crc.stroke(circle);
            console.log("rotation rot");
        }
        update() {
            this.move();
            this.draw();
            console.log(this.x, this.y);
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > Zauberbild.canvas.width || this.x < 0 || this.y > Zauberbild.canvas.height || this.y < 0) {
                this.x = 600;
                this.y = Zauberbild.canvas.height * Math.random();
            }
            console.log(this.x, this.y);
        }
    }
    Zauberbild.Element = Element;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=linie.js.map
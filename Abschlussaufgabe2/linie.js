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
            Zauberbild.crc.translate(Zauberbild.canvas.width / 2, Zauberbild.canvas.width / 2);
            Zauberbild.crc.rotate(Math.PI / 180);
            Zauberbild.crc.translate(-Zauberbild.canvas.width / 2, -Zauberbild.canvas.width / 2);
            Zauberbild.crc.fillStyle = "red";
            Zauberbild.crc.fill(circle);
            Zauberbild.crc.stroke(circle);
            console.log("rotation rot");
            //console.log("move");
        }
        update() {
            //this.move();
            this.draw();
        }
    }
    Zauberbild.Element = Element;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=linie.js.map
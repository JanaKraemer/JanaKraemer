var Zauberbild;
(function (Zauberbild) {
    class Kreis extends Zauberbild.Element {
        constructor() {
            super();
            this.x = Math.random() * Zauberbild.canvas.width;
            this.y = Math.random() * Zauberbild.canvas.height;
            this.dy = Math.random() * 10;
        }
        draw() {
            //let futter: Path2D = new Path2D();
            //futter.arc(this.x, this.y - 1, 20, 0, 360);
            // crc.fillStyle = "brown";
            //crc.fill(futter);
            //crc.stroke(futter);
            //for (let i: number = 0; i < input.length; i++) {
            //let radio: HTMLInputElement = <HTMLInputElement>document.getElementById("rotate");
            //if (radio.checked == true) {
            let circle = new Path2D();
            circle.arc(525, 200, 25, 0, 360);
            Zauberbild.crc.fillStyle = "red";
            Zauberbild.crc.fill(circle);
            Zauberbild.crc.stroke(circle);
            console.log("hi");
            //}
            //}
            let dreieck = new Path2D();
            dreieck.moveTo(500, 300);
            dreieck.lineTo(525, 325);
            dreieck.lineTo(525, 275);
            Zauberbild.crc.fillStyle = "green";
            Zauberbild.crc.fill(dreieck);
            Zauberbild.crc.stroke(dreieck);
        }
        move() {
            Zauberbild.crc.clearRect(0, 0, Zauberbild.canvas.width, Zauberbild.canvas.height);
            Zauberbild.crc.translate(Zauberbild.canvas.width / 2, Zauberbild.canvas.width / 2);
            Zauberbild.crc.rotate(Math.PI / 180);
            Zauberbild.crc.translate(-Zauberbild.canvas.width / 2, -Zauberbild.canvas.width / 2);
            Zauberbild.crc.fillStyle = "green";
            Zauberbild.crc.fillRect(Zauberbild.canvas.width / 4, Zauberbild.canvas.width / 4, Zauberbild.canvas.width / 2, Zauberbild.canvas.height / 4);
        }
    }
    Zauberbild.Kreis = Kreis;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=circle.js.map
var Zauberbild;
(function (Zauberbild) {
    // Kommentare zum Code, warum was......!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", auswahlKreis);
    //let zauberbild: Element[] = [];
    Zauberbild.kreisArray = [];
    Zauberbild.eckArray = [];
    Zauberbild.auswahlArray = [];
    let fps = 30;
    let imageData;
    Zauberbild.kreisArraymove = [];
    Zauberbild.input = document.getElementsByTagName("input");
    let einkreis = false;
    function init() {
        Zauberbild.canvas = document.getElementsByTagName("canvas")[0];
        Zauberbild.crc = Zauberbild.canvas.getContext("2d");
        imageData = Zauberbild.crc.getImageData(0, 0, 600, 600);
        let test = document.getElementById("test");
        test.addEventListener("click", zeichneKreis);
        let klein = document.getElementById("Klein");
        klein.addEventListener("click", Klein);
        let mittel = document.getElementById("Mittel");
        mittel.addEventListener("click", Mittel);
        let gross = document.getElementById("Gross");
        gross.addEventListener("click", Gross);
        let schwarz = document.getElementById("schwarz");
        schwarz.addEventListener("click", Schwarz);
        let grau = document.getElementById("grau");
        grau.addEventListener("click", Grau);
        let weiß = document.getElementById("weiß");
        weiß.addEventListener("click", Weiß);
        //console.log("hellllo");
        update();
    }
    function Klein() {
        Zauberbild.canvas.height = 400;
        Zauberbild.canvas.width = 400;
    }
    function Mittel() {
        Zauberbild.canvas.height = 500;
        Zauberbild.canvas.width = 500;
    }
    function Gross() {
        Zauberbild.canvas.height = 600;
        Zauberbild.canvas.width = 600;
    }
    function Grau() {
        Zauberbild.crc.fillRect(0, 0, 600, 600);
        Zauberbild.crc.fillStyle = "grey";
        Zauberbild.crc.fillRect(0, 0, 600, 600);
    }
    function Weiß() {
        Zauberbild.crc.fillRect(0, 0, 600, 600);
        Zauberbild.crc.fillStyle = "white";
        Zauberbild.crc.fillRect(0, 0, 600, 600);
    }
    function Schwarz() {
        Zauberbild.crc.fillRect(0, 0, 600, 600);
        Zauberbild.crc.fillStyle = "grey";
        Zauberbild.crc.fillRect(0, 0, 600, 600);
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Zauberbild.crc.clearRect(0, 0, Zauberbild.canvas.width, Zauberbild.canvas.height);
        Zauberbild.crc.putImageData(imageData, 0, 0);
        //for (let i: number = 0; i < zauberbild.length; i++) {
        // zauberbild[i].update();
        //}
        zeichneKreis();
        zeichnerechteck();
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            Zauberbild.kreisArray[i].update();
        }
        //  Zeichenfläche();
        for (let i = 0; i < Zauberbild.kreisArraymove.length; i++) {
            Zauberbild.kreisArraymove[i].update();
        }
        for (let i = 0; i < Zauberbild.eckArray.length; i++) {
            Zauberbild.eckArray[i].update();
        }
    }
    // function zeichneKreisUpdate(): void {
    //   for (let i: number = 0; i < kreisArray.length; i++) {
    //     kreisArray[i].update();
    //}
    // }
    function auswahlKreis(_event) {
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            let x = _event.clientX; // Position, an der geklickt wurde
            let y = _event.clientY;
            if (Zauberbild.kreisArray[i].x < x + 50 && Zauberbild.kreisArray[i].x < x - 50 && Zauberbild.kreisArray[i].y < y + 50 && Zauberbild.kreisArray[i].y < y - 50 && x <= Zauberbild.canvas.width && y <= Zauberbild.canvas.height) {
                Zauberbild.auswahlArray.push(Zauberbild.kreisArray[i]); // Klick mit Kreis vergleichen
                // wenn Klick und Kreis übereinstimmen, kann dieser gelöscht, oder verschoben werden
                console.log("Auswahl");
                let button = document.createElement("BUTTON"); // Create a <button> element
                button.innerHTML = "Delete Kreis"; // Insert text
                document.body.appendChild(button); //Button erscheint im HTML
                //console.log("button");
                button.addEventListener("click", deleteButton);
                let buttonposition = document.createElement("BUTTON"); // Create a <button> element
                button.innerHTML = "Kreis Position verändern"; // Insert text
                document.body.appendChild(buttonposition); //Button erscheint im HTML
                //console.log("buttonposition");
                buttonposition.addEventListener("click", positionButtonKreis);
            }
        }
    }
    function positionButtonKreis(_event) {
        let x = _event.clientX; // Problem, weil Button nicht in Canvas ist (wegen x,y) ??????????
        let y = _event.clientY;
        if (x < Zauberbild.canvas.width && y < Zauberbild.canvas.height) {
            let circle = new Zauberbild.Element(x, y);
            Zauberbild.kreisArray.push(circle);
        }
    }
    function deleteButton() {
        Zauberbild.auswahlArray.splice(0, 1);
    }
    function zeichneKreis() {
        // let symbol: Kreis = new Kreis();
        var x = 0;
        var y = 15;
        var speed = 3;
        let radio = document.getElementById("rotate");
        if (radio.checked == true && einkreis == false) {
            einkreis = true;
            let circle = new Zauberbild.Element();
            Zauberbild.kreisArray.push(circle);
        }
        // kreisArray.push(circle);
        let radio2 = document.getElementById("move2");
        if (radio2.checked == true) {
            let circlemove = new Zauberbild.Move();
            Zauberbild.kreisArraymove.push(circlemove);
            console.log("Ich move");
        }
    }
    function zeichnerechteck() {
        let radio3 = document.getElementById("move");
        var x = 0;
        var y = 15;
        var speed = 3;
        if (radio3.checked == true) {
            let eck = new Zauberbild.Eck();
            //let quadrat: Path2D = new Path2D;
            //crc.clearRect(0, 0, 500, 300);
            //crc.fillStyle = "yellow";
            //crc.fillRect(x, y, 20, 20);
            //crc.lineWidth = 3;
            //crc.strokeStyle = "yellow";
            //crc.strokeRect(x, y, 20, 20);
            console.log("ecke");
            Zauberbild.eckArray.push(eck);
            //x += speed;
            //if (x <= 0 || x >= 400) {
            //  speed = -speed;
            //}
            //this.x += speed;
            //this.y += this.dy;
            //if (this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
            //  this.x = 1000;
            //this.y = canvas.height * Math.random();
            // }
            //kreisArray.push(quadrat);
            // quadrat.addEventlistener("click", deletekreis);
        }
    }
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=main.js.map
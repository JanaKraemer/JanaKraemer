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
    let bg = "white";
    Zauberbild.input = document.getElementsByTagName("input");
    let einkreis = false;
    function init() {
        Zauberbild.canvas = document.getElementsByTagName("canvas")[0];
        Zauberbild.crc = Zauberbild.canvas.getContext("2d");
        imageData = Zauberbild.crc.getImageData(0, 0, 600, 600);
        // let test: HTMLButtonElement = <HTMLButtonElement>document.getElementById("test");
        //test.addEventListener("click", zeichneKreis);
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
        bg = "yellow";
    }
    function Weiß() {
        bg = "purple";
    }
    function Schwarz() {
        bg = "lightblue";
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        Zauberbild.crc.clearRect(0, 0, Zauberbild.canvas.width, Zauberbild.canvas.height);
        Zauberbild.crc.rect(0, 0, Zauberbild.canvas.width, Zauberbild.canvas.height);
        Zauberbild.crc.fillStyle = bg;
        Zauberbild.crc.fill();
        //crc.putImageData(imageData, 0, 0);
        //for (let i: number = 0; i < zauberbild.length; i++) {
        // zauberbild[i].update();
        //}
        zeichneKreis();
        zeichnerechteck();
        for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
            Zauberbild.kreisArray[i].update();
            console.log("Hiiii");
            //for (let i: number = 0; i < eckArray.length; i++) {
            //  eckArray[i].update();
            //}
            //console.log("Hiiii");
        }
    }
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
        //if (x < canvas.width && y < canvas.height) {
        //  let circle: Element = new Element(x, y);
        //kreisArray.push(circle);
        //}
    }
    function deleteButton() {
        Zauberbild.auswahlArray.splice(0, 1);
    }
    function zeichneKreis() {
        // let symbol: Kreis = new Kreis();
        //var x: number = 0;
        //var y: number = 15;
        //var speed: number = 3;
        let radio = document.getElementById("rotate");
        if (radio.checked == true && einkreis == false) {
            einkreis = true;
            for (let i = 0; i < Zauberbild.kreisArray.length; i++) {
                Zauberbild.kreisArray.pop();
            }
            console.log("what???");
            let circle = new Zauberbild.Element();
            Zauberbild.kreisArray.push(circle);
            // kreisArray[0].update();
        }
        // kreisArray.push(circle);
        // let radio2: HTMLInputElement = <HTMLInputElement>document.getElementById("move2");
        //if (radio2.checked == true) {
        //  for (let i: number = 0; i < kreisArraymove.length; i++) {
        //    kreisArraymove.pop();
        //}
        //let circlemove: Move = new Move();
        //kreisArraymove.push(circlemove);
        console.log("Ich move");
        //}
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
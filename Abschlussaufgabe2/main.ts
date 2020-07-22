namespace Zauberbild {

    // Kommentare zum Code, warum was......!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("mousedown", auswahlKreis);


    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    //let zauberbild: Element[] = [];
    export let kreisArray: Element[] = [];
    export let eckArray: Eck[] = [];
    export let auswahlArray: Element[] = [];
    let fps: number = 30;
    let imageData: ImageData;
    export let kreisArraymove: Move[] = [];

    export let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");



    let einkreis: Boolean = false;

    function init(): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        imageData = crc.getImageData(0, 0, 600, 600);

        let test: HTMLButtonElement = <HTMLButtonElement>document.getElementById("test");
        test.addEventListener("click", zeichneKreis);

        let klein: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Klein");
        klein.addEventListener("click", Klein);
        let mittel: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Mittel");
        mittel.addEventListener("click", Mittel);
        let gross: HTMLButtonElement = <HTMLButtonElement>document.getElementById("Gross");
        gross.addEventListener("click", Gross);

        let schwarz: HTMLButtonElement = <HTMLButtonElement>document.getElementById("schwarz");
        schwarz.addEventListener("click", Schwarz);
        let grau: HTMLButtonElement = <HTMLButtonElement>document.getElementById("grau");
        grau.addEventListener("click", Grau);
        let weiß: HTMLButtonElement = <HTMLButtonElement>document.getElementById("weiß");
        weiß.addEventListener("click", Weiß);


        //console.log("hellllo");


        update();

    }

    function Klein(): void {
        canvas.height = 400;
        canvas.width = 400;

    }

    function Mittel(): void {
        canvas.height = 500;
        canvas.width = 500;
    }

    function Gross(): void {
        canvas.height = 600;
        canvas.width = 600;
    }

    function Grau(): void {

        crc.fillRect(0, 0, 600, 600);
        crc.fillStyle = "grey";
        crc.fillRect(0, 0, 600, 600);
    }

    function Weiß(): void {
        crc.fillRect(0, 0, 600, 600);
        crc.fillStyle = "white";
        crc.fillRect(0, 0, 600, 600);
    }

    function Schwarz(): void {
        crc.fillRect(0, 0, 600, 600);
        crc.fillStyle = "grey";
        crc.fillRect(0, 0, 600, 600);
    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);
        //for (let i: number = 0; i < zauberbild.length; i++) {
        // zauberbild[i].update();
        //}

        zeichneKreis();
        zeichnerechteck();
        

        for (let i: number = 0; i < kreisArray.length; i++) {
            kreisArray[i].update();
        }
        //  Zeichenfläche();
        for (let i: number = 0; i < kreisArraymove.length; i++) {
            kreisArraymove[i].update();
        }

        for (let i: number = 0; i < eckArray.length; i++) {
            eckArray[i].update();


        }
    }

    // function zeichneKreisUpdate(): void {
    //   for (let i: number = 0; i < kreisArray.length; i++) {
    //     kreisArray[i].update();
    //}
    // }



    function auswahlKreis(_event: MouseEvent): void {

        for (let i: number = 0; i < kreisArray.length; i++) {

            let x: number = _event.clientX; // Position, an der geklickt wurde
            let y: number = _event.clientY;

            if (kreisArray[i].x < x + 50 && kreisArray[i].x < x - 50 && kreisArray[i].y < y + 50 && kreisArray[i].y < y - 50 && x <= canvas.width && y <= canvas.height) {
                auswahlArray.push(kreisArray[i]); // Klick mit Kreis vergleichen
                // wenn Klick und Kreis übereinstimmen, kann dieser gelöscht, oder verschoben werden


                console.log("Auswahl");

                let button: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");   // Create a <button> element
                button.innerHTML = "Delete Kreis";   // Insert text
                document.body.appendChild(button); //Button erscheint im HTML
                //console.log("button");
                button.addEventListener("click", deleteButton);

                let buttonposition: HTMLButtonElement = <HTMLButtonElement>document.createElement("BUTTON");   // Create a <button> element
                button.innerHTML = "Kreis Position verändern";   // Insert text
                document.body.appendChild(buttonposition); //Button erscheint im HTML
                //console.log("buttonposition");
                buttonposition.addEventListener("click", positionButtonKreis);

            }

        }
    }

    function positionButtonKreis(_event: MouseEvent): void {
        let x: number = _event.clientX; // Problem, weil Button nicht in Canvas ist (wegen x,y) ??????????
        let y: number = _event.clientY;
        if (x < canvas.width && y < canvas.height) {
            let circle: Element = new Element(x, y);

            kreisArray.push(circle);
        }
    }

    function deleteButton(): void {
        auswahlArray.splice(0, 1);
    }



    function zeichneKreis(): void {
        // let symbol: Kreis = new Kreis();

        var x: number = 0;
        var y: number = 15;
        var speed: number = 3;

        let radio: HTMLInputElement = <HTMLInputElement>document.getElementById("rotate");
        if (radio.checked == true && einkreis == false) {
            einkreis = true;


            let circle: Element = new Element();
            kreisArray.push(circle);

        }
        // kreisArray.push(circle);
        let radio2: HTMLInputElement = <HTMLInputElement>document.getElementById("move2");
        if (radio2.checked == true) {

            let circlemove: Move = new Move();
            kreisArraymove.push(circlemove); 
            

            console.log("Ich move");
        }

    }

    function zeichnerechteck(): void {
        let radio3: HTMLInputElement = <HTMLInputElement>document.getElementById("move");
        var x: number = 0;
        var y: number = 15;
        var speed: number = 3;
        if (radio3.checked == true) {


            let eck: Eck = new Eck();
            //let quadrat: Path2D = new Path2D;
            //crc.clearRect(0, 0, 500, 300);
            //crc.fillStyle = "yellow";
            //crc.fillRect(x, y, 20, 20);
            //crc.lineWidth = 3;
            //crc.strokeStyle = "yellow";
            //crc.strokeRect(x, y, 20, 20);
            console.log("ecke");

            eckArray.push(eck);

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





}



import * as Http from "http"; // Ein http Objekt wird im Code generiert//
import * as URL from "url";
let address: string = "http://localhost:8100";

function rueckgabe() {
    let xhr: XMLHttpRequest = new XMLHttpRequest();
    xhr.open("GET", address);
}

namespace Zauberbild {  //Die Namen sind nur im Namespace bekannt//
    console.log("Starting server");  //Starting server wird in der Konsole ausgegeben.//
    let port: number = Number(process.env.PORT); // Eine Variable wird deklariert, vom Typ number. Die Umgebungsvariable port sagt dem Server worauf er achten muss.//
    if (!port) // Wenn Port nicht gefunden wird, dann wird dem Port eine Zahl zugewiesen.//
        port = 8100; // Die Variable bekommt eine Zahl zugewiesen.//

    let server: Http.Server = Http.createServer();  //Ein Server wird generiert//
    server.addListener("request", handleRequest); // Der Server bekommt den Event-Listener "request"//
    server.addListener("listening", handleListen); // Der Server bekommt den Event-Listener "listening"//
    server.listen(port); // Der Server überwacht den Port//

    function handleListen(): void { // Die Funktion handleListen wird aufgerufen, sie besitzt einen Event-Listener//
        console.log("Listening"); //Listening wird  auf der Konsole aufegegeben.//
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { // Die Funktion bekommt 2 Übergabeparameter. Der erste Übergabeparameter fordert eine Info an und der Zweite kann darauf antworten.//

        console.log("I hear voices!"); // I hear voices! wird auf der Konsole ausgegeben.//

        _response.setHeader("content-type", "text/html; charset=utf-8"); // .setHeader liest einen Header aus, der sich in einer Warteschlange befindet und noch nicht an den Client gesendet wurde.//
        _response.setHeader("Access-Control-Allow-Origin", "*"); // .setHeader liest einen Header aus, der sich in einer Warteschlange befindet und noch nicht an den Client gesendet wurde. Der Befehl gibt die Erlaubnis, alles auszulesen.//

        _response.write(_request.url); // Infos werden an den Client übergeben und in die URL geschriben//

        _response.end(); // Diese Methode signalisiert dem Server, dass alle Antworten gesendet wurden und die Nachricht vollständig ist.//
    }
}
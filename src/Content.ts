﻿import fs from "fs"; // https://nodejs.org/docs/latest-v14.x/api/fs.html
import http from "http"; // https://nodejs.org/docs/latest-v14.x/api/http.html
import Megoldas from "./Megoldas";

export default function content(req: http.IncomingMessage, res: http.ServerResponse): void {
    // favicon.ico kérés kiszolgálása:
    if (req.url === "/favicon.ico") {
        res.writeHead(200, { "Content-Type": "image/x-icon" });
        fs.createReadStream("favicon.ico").pipe(res);
        return;
    }
    // Weboldal inicializálása + head rész:
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<!DOCTYPE html>");
    res.write("<html lang='hu'>");
    res.write("<head>");
    res.write("<meta charset='utf-8'>");
    res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
    res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
    res.write("<title>Jedlik Ts Template</title>");
    res.write("</head>");
    res.write("<body><form><pre>");

    // Kezd a kódolást innen -->

    const mo = new Megoldas("utasadat.txt");

    res.write(`2. feladat\nA buszra ${mo.felszallokSzama} utas akart felszállni.\n`);

    res.write(`3. feladat\nA buszra ${mo.evernytelenfelszallok} utas nem szállhatott fel.\n`);

    res.write(`3. feladat\nA buszra ${mo.evernytelenfelszallokLinq} utas nem szállhatott fel.\n`);

    res.write(`4. feladat\nA legtöbb utas (${mo.maxKeresArray.felszallokSzama} fő) a ${mo.maxKeresArray.megalloSorszam}. megállóban próbált felszállni.\n`);

    res.write(`4. feladat\nA legtöbb utas (${mo.getMaxKeresMap.felszallokSzama} fő) a ${mo.getMaxKeresMap.megalloSorszam}. megállóban próbált felszállni.\n`);

    res.write(`5. feladat\nIngyenesen utazók száma: ${mo.ingyenesUtazokSzama} fő\nA kedvezményesen utazók száma: ${mo.kedvezmenyesUtazokSzama} fő\n`);

    // <---- Fejezd be a kódolást

    res.write("</pre></form></body></html>");
    res.end();
}

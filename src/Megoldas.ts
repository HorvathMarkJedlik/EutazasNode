import fs from "fs";
import Felszallas from "./Felszallas";
import FelszallasBerlet from "./FelszallasBerlet";
import FelszallasJegy from "./FelszallasJegy";

interface IMegallo {
    megalloSorszam: number;
    felszallokSzama: number;
}

export default class Megoldas {
    #utasdatok: Felszallas[] = [];

    get felszallokSzama(): number {
        return this.#utasdatok.length;
    }

    get evernytelenfelszallokLinq(): number {
        return this.#utasdatok.filter(x => !x.ervenyesFelszallas).length;
    }

    get evernytelenfelszallok(): number {
        let db: number = 0;
        for (const utasAdat of this.#utasdatok) {
            if (utasAdat.ervenyesFelszallas == false) {
                db++;
            }
        }
        return db;
    }

    get maxKeresArray(): IMegallo {
        const max: IMegallo = { felszallokSzama: -1, megalloSorszam: -1 };
        const stat: number[] = new Array(30).fill(0); //30 elemű tömb, 0-val feltöltve

        for (const felszallas of this.#utasdatok) {
            stat[felszallas.megalloSorszam]++;
        }
        max.felszallokSzama = Math.max(...stat);
        max.megalloSorszam = stat.indexOf(max.felszallokSzama);
        return max;
    }

    get getMaxKeresMap(): IMegallo {
        const max: IMegallo = { felszallokSzama: -1, megalloSorszam: -1 };
        const stat: Map<number, number> = new Map<number, number>();
        this.#utasdatok.forEach(e => {
            if (stat.has(e.megalloSorszam)) {
                const regErtek: number = stat.get(e.megalloSorszam) as number;
                stat.set(e.megalloSorszam, regErtek + 1);
            } else {
                //Ha nincs ilyen kulcs
                stat.set(e.megalloSorszam, 1);
            }
        });

        //Maximum keresése klasszikus módón
        max.felszallokSzama = 0;
        for (const [key, value] of stat) {
            if (value > max.felszallokSzama) {
                max.felszallokSzama = value;
                max.megalloSorszam = key;
            }
        }

        return max;
    }

    constructor(forras: string) {
        fs.readFileSync(forras)
            .toString()
            .split("\n")
            .forEach(sor => {
                const aktSor = sor.trim();
                const tipus = aktSor.split(" ")[3];
                if (tipus === "JGY") {
                    this.#utasdatok.push(new FelszallasJegy(aktSor));
                }
                if (["FEB", "TAB", "NYB", "NYP", "RVS", "GYK"].includes(tipus)) {
                    this.#utasdatok.push(new FelszallasBerlet(aktSor));
                }
            });
    }
}

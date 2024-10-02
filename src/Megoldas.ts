import fs from "fs";
import Felszallas from "./Felszallas";
import FelszallasBerlet from "./FelszallasBerlet";
import FelszallasJegy from "./FelszallasJegy";

export default class Megoldas {
    #utasdatok: Felszallas[] = [];

    get felszallokSzama(): number {
        return this.#utasdatok.length;
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

import Felszallas from "./Felszallas";

export default class FelszallasBerlet extends Felszallas {
    #tipus: string;
    #ervenyes: Date;

    constructor(adatsor: string) {
        super(adatsor);
        const m: string[] = adatsor.split(" ");
        this.#tipus = m[3];
        const ev: number = parseInt(m[4].substring(0, 4));
        const honapIndex: number = parseInt(m[4].substring(4, 6));
        const nap: number = parseInt(m[4].substring(6, 8));
        this.#ervenyes = new Date(ev, honapIndex, nap, 23, 59, 59, 999);
    }
}

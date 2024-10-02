import Felszallas from "./Felszallas";

export default class FelszallasJegy extends Felszallas {
    #jegyekSzama: number;

    get ervenyesFelszallas(): boolean {
        return this.#jegyekSzama > 0;
    }

    constructor(adatsor: string) {
        super(adatsor);
        this.#jegyekSzama = parseInt(adatsor.split(" ")[4]);
    }
}

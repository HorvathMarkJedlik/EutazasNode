import Felszallas from "./Felszallas";

export default class FelszallasJegy extends Felszallas {
    #jegyekSzama: number;

    constructor(adatsor: string) {
        super(adatsor);
        this.#jegyekSzama = parseInt(adatsor.split(" ")[4]);
    }
}

import Felszallas from "./Felszallas";

export default class FelszallasJegy extends Felszallas {
    #jegyekSzama: number;

    constructor(sor: string) {
        super(sor);
        this.#jegyekSzama = parseInt(sor.split(" ")[4]);
    }
}

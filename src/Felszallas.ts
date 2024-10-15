export default abstract class Felszallas {
    // abstract az osztály nem példanyosítható csak származtatható
    protected megalloSorszama: number;
    protected ido: Date;
    protected kartyaAzon: string;
    // protected: csak az osztályon belül és a származtatott

    public get megalloSorszam(): number {
        return this.megalloSorszama;
    }

    get ervenyesFelszallas(): boolean {
        return false;
    }

    get ingyenesUtazas() {
        return false;
    }

    get kedvezmenyesUtazas() {
        return false;
    }

    constructor(adatsor: string) {
        const m: string[] = adatsor.split(" ");
        this.megalloSorszama = parseInt(m[0]);
        const év: number = parseInt(m[1].substring(0, 4));
        const honapIndex: number = parseInt(m[1].substring(4, 6)) - 1;
        const nap: number = parseInt(m[1].substring(6, 8));
        const ora: number = parseInt(m[1].substring(9, 11));
        const perc: number = parseInt(m[1].substring(11, 13));
        this.ido = new Date(év, honapIndex, nap, ora, perc);
        this.kartyaAzon = m[2];
    }

    napokszama(e1: number, h1: number, n1: number, e2: number, h2: number, n2: number): number {
        h1 = (h1 + 9) % 12;
        e1 = e1 - ~~(h1 / 10);
        const d1: number = 365 * e1 + ~~(e1 / 4) - ~~(e1 / 100) + ~~(e1 / 400) + ~~((h1 * 306 + 5) / 10) + n1 - 1;
        h2 = (h2 + 9) % 12;
        e2 = e2 - ~~(h2 / 10);
        const d2: number = 365 * e2 + ~~(e2 / 4) - ~~(e2 / 100) + ~~(e2 / 400) + ~~((h2 * 306 + 5) / 10) + n2 - 1;
        return d2 - d1;
    }
}

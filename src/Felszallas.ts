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
}

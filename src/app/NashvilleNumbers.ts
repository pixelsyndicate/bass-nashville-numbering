export class NashvilleNumbers {

    "1": { str: string, note: string };
    "2": { str: string, note: string };
    "3": { str: string, note: string };
    "4": { str: string, note: string };
    "5": { str: string, note: string };
    "6": { str: string, note: string };
    "7": { str: string, note: string };

    set(str: any, rootNote: any): void {

        let rNIndex: number = str.notes.indexOf(rootNote);
        let _1st = str.notes[rNIndex];
        let _2nd = str.notes[rNIndex + 2];
        let _3rd = str.notes[rNIndex + 4];
        let _4th = str.notes[rNIndex + 5];//aboveString.notes[rNIndex];
        let _5th = str.notes[rNIndex + 7];//aboveString.notes[rNIndex + 2];
        let _6th = str.notes[rNIndex + 9];//aboveString.notes[rNIndex + 4];
        let _7th = str.notes[rNIndex + 11];//aboveString.notes[rNIndex + 6];
        this["1"] = { str: str.open, note: _1st };
        this["2"] = { str: str.open, note: _2nd };
        this["3"] = { str: str.open, note: _3rd };
        this["4"] = { str: str.open, note: _4th };
        this["5"] = { str: str.open, note: _5th };
        this["6"] = { str: str.open, note: _6th };
        this["7"] = { str: str.open, note: _7th };

    }

    constructor() {
        this["1"] = { str: "", note: "" };
        this["2"] = { str: "", note: "" };
        this["3"] = { str: "", note: "" };
        this["4"] = { str: "", note: "" };
        this["5"] = { str: "", note: "" };
        this["6"] = { str: "", note: "" };
        this["7"] = { str: "", note: "" };
    }

    getNote(num:number):string{
        return this[num].note;
    }

    getNumber(note:string):number{

        for(let x =1; x<8;x++){
            if(this[x].note == note)
            return x;
        }
        return 0;
    }

}


export class NashvilleNumbers {

    "1": { str: string, note: string };
    "2": { str: string, note: string };
    "3": { str: string, note: string };
    "4": { str: string, note: string };
    "5": { str: string, note: string };
    "6": { str: string, note: string };
    "7": { str: string, note: string };

    unset(){
        this["1"] = { str: "", note: "" };
        this["2"] = { str: "", note: "" };
        this["3"] = { str: "", note: "" };
        this["4"] = { str: "", note: "" };
        this["5"] = { str: "", note: "" };
        this["6"] = { str: "", note: "" };
        this["7"] = { str: "", note: "" };
    }
    set(str: any, rootNote: any): void {

        let rNIndex: number = str.notes.indexOf(rootNote);
                let i = str.notes[rNIndex];
        let ii = str.notes[rNIndex + 2];
        let iii = str.notes[rNIndex + 4];
        let iv = str.notes[rNIndex + 5];
        let v = str.notes[rNIndex + 7];
        let vi = str.notes[rNIndex + 9];
        let vii = str.notes[rNIndex + 11];
        this["1"] = { str: str.open, note: i };
        this["2"] = { str: str.open, note: ii };
        this["3"] = { str: str.open, note: iii };
        this["4"] = { str: str.open, note: iv };
        this["5"] = { str: str.open, note: v };
        this["6"] = { str: str.open, note: vi };
        this["7"] = { str: str.open, note: vii };

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


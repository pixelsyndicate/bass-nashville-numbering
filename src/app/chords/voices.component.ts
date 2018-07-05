import { Component, Input, } from '@angular/core';
import { FretBoard } from '../Models/FretBoard';
import { BassService } from '../Services/bass.service';
import { AppComponent } from '../app.component';
import { Chord } from '../Models/Chord';
import { ChordBlock } from '../Models/ChordBlock';
import { ChordService } from '../Services/chord.service';
import { BassString } from '../Models/BassString';
@Component({
    selector: 'app-chord-voices',
    templateUrl: './voices.component.html'
})
export class VoicesComponent {

    @Input() inputVoices: Chord[];

    bs: BassService;
    cs: ChordService;

    constructor(private bassService: BassService, private chordService: ChordService) {
        this.bs = bassService;
        this.cs = chordService;
    }

}
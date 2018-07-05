import { Component, Input, OnInit } from '@angular/core';
import { FretBoard } from '../Models/FretBoard';
import { BassService } from '../Services/bass.service';
import { AppComponent } from '../app.component';
import { Chord } from '../Models/Chord';
import { ChordBlock } from '../Models/ChordBlock';
import { ChordService } from '../Services/chord.service';
import { BassString } from '../Models/BassString';
@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.css']
})
export class ChordsComponent implements OnInit {

  bs: BassService;
  cs: ChordService;
  closedVoice: Chord[];
  openVoice: Chord[];

  constructor(private bassService: BassService, private chordService: ChordService) {
    this.bs = bassService;
    this.cs = chordService;
    this.closedVoice = [];
    this.openVoice = [];
    this.closedVoice = chordService.getClosedChords();
    this.openVoice = chordService.getOpenChords();
  }

  ngOnInit() { }

 

}

import { Component, Input, OnInit } from '@angular/core';
import { FretBoard } from '../FretBoard';
import { BassService, ChordService } from '../bass.service';
import { AppComponent } from '../app.component';
import { Chord } from '../Chord';
import { ChordBlock } from '../ChordBlock';
@Component({
  selector: 'app-chords',
  templateUrl: './chords.component.html',
  styleUrls: ['./chords.component.css']
})
export class ChordsComponent implements OnInit {

  @Input() p: AppComponent;
  @Input() bassStrings: number;
  fretboard: FretBoard;
  strings: any;

  closedVoice: Chord[];
  openVoice: Chord[];


  constructor(bassService: BassService, chordService: ChordService) {
    this.strings = bassService.getStrings();
    this.closedVoice = [];
    this.openVoice = [];
    this.closedVoice = chordService.getClosedChords();
    this.openVoice = chordService.getOpenChords();
  }

  ngOnInit() {

    // instantiate a fretboard
    this.fretboard = new FretBoard();
    this.fretboard.addStrings(this.strings);

  }

  isChordNote(chord:Chord, str:string, note:number):any{
    let theBlock = this.getChordBlock(chord,str,note);
    return theBlock!=null;
  }

  getChordBlock(chord:Chord, str:string, note:number): ChordBlock {
   let theBlock = chord.blocks.find(x => x.bassString == str && x.fret == note);
   return theBlock;
  }
  
  getChordBlockClass(block:ChordBlock){
      
        switch (block.finger){
          case 1:
          return 'btn-light';
          case 2:
return 'btn-info';
          case 3:
         return 'btn-success';
          case 4:
return 'btn-warning';
          default:
          return '';
        }
      }
     
    }

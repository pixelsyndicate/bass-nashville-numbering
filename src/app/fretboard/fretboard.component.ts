import { Component, OnInit} from '@angular/core';
import { BassService } from '../Services/bass.service';
import { FretBoard } from '../Models/FretBoard';
import { NashvilleNumbers } from '../Models/NashvilleNumbers';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.css']
})
export class FretboardComponent implements OnInit {

  fretboard: FretBoard;
  allNotes: Array<string>;
  bs: BassService;

  constructor(private bassService: BassService) {

    this.fretboard = new FretBoard();    
    this.bs = bassService;
  }
 

  ngOnInit() {


    let all6BassStrings = this.bs.getStrings();
    this.fretboard.addStrings(all6BassStrings); // this will be filtered down to only the supporting strings during bs.filterStrings(fretboard.strings, bs.stringCount).reverse()
    
    this.bs.nashNumbers = new NashvilleNumbers();
  }

 
}
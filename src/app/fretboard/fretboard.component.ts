import { Component, OnInit} from '@angular/core';
import { BassService } from '../Services/bass.service';
import { FretBoard } from '../Models/FretBoard';
import { NashvilleNumbers } from '../Models/NashvilleNumbers';
import { BassString } from '../Models/BassString';

@Component({
  selector: 'app-fretboard',
  templateUrl: './fretboard.component.html',
  styleUrls: ['./fretboard.component.css']
})
export class FretboardComponent implements OnInit {

  allNotes: Array<string>;
  bs: BassService;


  constructor(private bassService: BassService) {
   
    this.bs = bassService;
    if(!this.bs.userStringCount){
      console.log('hmm... userStringCount was null. setting to 4');
      this.bs.userStringCount = 4;
    }
  }
 

  ngOnInit() {
              
  }


  getUserStrings(): BassString[]{
    let stringType = this.bs.userStringCount;
    let toReturn = 
    this.bs.filterStrings(stringType).reverse();
    console.log('fb haz ' + toReturn.length + 'strings');
    return toReturn;
  }

 
}
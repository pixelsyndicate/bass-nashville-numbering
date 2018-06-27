import { Component, OnInit } from '@angular/core';
import { FretBoard } from '../FretBoard';
import { BassService } from '../bass.service';

@Component({
  selector: 'app-octives',
  templateUrl: './octives.component.html',
  styleUrls: ['./octives.component.css']
})
export class OctivesComponent implements OnInit {

  fretboard:FretBoard;
  strings: any;


  constructor(bassService:BassService) {
    this.strings = bassService.getStrings();
   }

  ngOnInit() {

    // instantiate a fretboard
    this.fretboard = new FretBoard();
    this.fretboard.addStrings(this.strings);
  }

}

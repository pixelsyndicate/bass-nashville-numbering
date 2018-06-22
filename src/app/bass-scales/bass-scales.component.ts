import { Component, OnInit } from '@angular/core';
import { Scale } from '../Scale';
import { MajorScale, MajorPentatonicScale, MinorScale, MinorPentatonicScale, BluesScale } from '../Scale';




@Component({
  selector: 'app-bass-scales',
  templateUrl: './bass-scales.component.html',
  styleUrls: ['./bass-scales.component.css']
})
export class BassScalesComponent implements OnInit {

  title = 'Five Common Scales';
  subTitle = 'The numbers represent which finger you should use, and the red color indicates a starting position (root note)';
  TheScales = [];

  private majorScale: MajorScale;
  private majorPentatonicScale: Scale;
  private minorScale: Scale;
  private minorPentatonicScale: Scale;
  private bluesScale: Scale;

  constructor() {

  }

  ngOnInit() {

    
    this.majorScale = new MajorScale();
    this.majorPentatonicScale = new MajorPentatonicScale();
    this.minorScale = new MinorScale();
    this.minorPentatonicScale = new MinorPentatonicScale();
    this.bluesScale = new BluesScale();
    this.TheScales = [this.majorScale, this.majorPentatonicScale, this.minorScale, this.minorPentatonicScale, this.bluesScale];

    // this.TheScales.forEach(scale => {
    //   scale.tagOctiveRoot();
    //   let displayString = scale.name + " Scale -- \n\r";
    //   scale.blocks.forEach(row => {

    //     row.forEach(cell => {
    //       displayString = displayString + (cell.isScale ? "[" + cell.finger + (cell.isRoot ? "*" : " ") + "] | " : "[  ] | ");
    //     });
    //     displayString = displayString + "\n\r";

    //   });
    //   console.log(displayString);
    // });

  }

}

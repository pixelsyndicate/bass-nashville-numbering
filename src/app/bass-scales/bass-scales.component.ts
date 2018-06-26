import { Component, OnInit, Input } from '@angular/core';

import {Scale, MajorScale, MajorPentatonicScale, MinorScale, MinorPentatonicScale, BluesScale } from '../Scale';


@Component({
  selector: 'app-bass-scales',
  templateUrl: './bass-scales.component.html',
  styleUrls: ['./bass-scales.component.css']
})
export class BassScalesComponent implements OnInit {

  @Input() bassStrings: number;
  title = 'Five Common Scales';
  subTitle = 'The numbers represent which finger you should use, and the red color indicates a starting position (root note)';
  TheScales:Scale[];

  private majorScale: MajorScale;
  private majorPentatonicScale: MajorPentatonicScale;
  private minorScale: MinorScale;
  private minorPentatonicScale: MinorPentatonicScale;
  private bluesScale: BluesScale;

  constructor() {
    this.TheScales = [];
  }

  ngOnInit() {

    
    this.majorScale = new MajorScale();
    this.majorPentatonicScale = new MajorPentatonicScale();
    this.minorScale = new MinorScale();
    this.minorPentatonicScale = new MinorPentatonicScale();
    this.bluesScale = new BluesScale();
    this.TheScales = [this.majorScale, this.majorPentatonicScale, this.minorScale, this.minorPentatonicScale, this.bluesScale];


  }

}

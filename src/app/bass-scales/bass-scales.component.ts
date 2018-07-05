import { Component, OnInit, Input } from '@angular/core';
import { Scale } from '../Models/Scale';
import { ScaleService } from '../Services/scale.service';

@Component({
  selector: 'app-bass-scales',
  templateUrl: './bass-scales.component.html',
  styleUrls: ['./bass-scales.component.css']
})
export class BassScalesComponent implements OnInit {

  title = 'Five Common Scales';
  subTitle = 'The numbers represent which finger you should use, and the red color indicates a starting position (root note)';
  TheScales:Scale[];

  constructor(private scaleService: ScaleService) {
    this.TheScales = [];
  }

  ngOnInit() {
    this.TheScales = this.scaleService.getScales();  
  }

}

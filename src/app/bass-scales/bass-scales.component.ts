import { Component, OnInit, Input } from '@angular/core';
import { Scale } from '../Scale';
import { StringsService } from '../strings.service';

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



  constructor(private stringsService: StringsService) {
    this.TheScales = [];
  }

  ngOnInit() {

    this.TheScales = this.stringsService.getScales(this.bassStrings);
    

  }

}

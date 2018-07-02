import { Component } from '@angular/core';
import { BassString } from './BassString';
import { BassService } from './Services/bass.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bs: BassService;

  constructor(bassService: BassService) {
    this.bs = bassService;
  }
  bassStrings: number = 5;

  showPage: string;

  filterStrings(stringObjs: BassString[], strType: number): BassString[] {
    return this.bs.filterStrings(stringObjs, strType);
  }

}

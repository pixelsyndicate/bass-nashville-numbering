import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { BassString } from './Models/BassString';
import { BassService } from './Services/bass.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewLocation: any;
  bs: BassService;

  constructor(private bassService: BassService, location: Location) {
    this.bs = bassService;
    this.viewLocation = location.path(false);
  }

  filterStrings(stringObjs: BassString[], strType: number): BassString[] {
    return this.bs.filterStrings(stringObjs, strType);
  }
}


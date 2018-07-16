import { Component, OnInit } from '@angular/core';
import { ClickService } from '../../Services/click.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-tap-click',
  templateUrl: './tap-click.component.html',
  styleUrls: ['./tap-click.component.css']
})
export class TapClickComponent implements OnInit {

  metro: any;
  clickService: ClickService;

  constructor(clickService: ClickService) {
    this.clickService = clickService;
    this.metro = clickService.metro;
  }

  ngOnInit() {
    this.clickService.tempoEntries = new Array<number>(); // buffer for all taps
    this.clickService.msMultiplier = 1; // start tap mlplr (quarter notes)    
    this.clickService.tempoEntriesMax = 10; // 
    this.clickService.tempoEntriesBufferTimeout = 10;

    // determine the keycodes with this website: http://keycode.info/
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.keyCode === 32)
        this.clickService.tap2tempo();
    });
  }
}
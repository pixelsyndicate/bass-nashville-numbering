import { Component } from '@angular/core';
import { BassService } from '../Services/bass.service';


@Component({
  selector: 'app-nash-legend',
  templateUrl: './nnlegend.component.html',
  styleUrls: ['./nnlegend.component.css']
})
export class NNLegendComponent {
  bs: BassService;


  constructor(private bassService: BassService) {
    this.bs = bassService;
  }

}
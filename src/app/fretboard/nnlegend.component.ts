import { Component, Input, OnInit } from '@angular/core';
import { FretboardComponent } from './fretboard.component';


@Component({
    selector: 'app-nash-legend',
    templateUrl: './nnlegend.component.html',
    styleUrls: ['./nnlegend.component.css']
  })
  export class NNLegendComponent implements OnInit{
    ngOnInit(): void {
    }
  
    constructor(){}
    @Input() p:FretboardComponent;
  }
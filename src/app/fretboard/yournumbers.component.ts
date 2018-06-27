import { Component, OnInit, Input } from '@angular/core';

import { NashvilleNumbers } from '../NashvilleNumbers';

import { FretboardComponent  } from './fretboard.component';


@Component(
    {
      selector:'app-nash-your-numbers',
      template: `<div class="row col" id="yourNumbers" [ngClass]="{'d-none': p.nashNumbers.getNote(1)==''}">
    <div class="col-sm-12">
      <label for="yourNumbers">
        <strong>Your Nashville Numbers</strong>
      </label>
    </div>
    <div class="col" *ngFor="let num of [1,2,3,4,5,6,7]">
  
      <span [ngClass]="p.getNashNumberBadgeClassByNum(num)" style="font-size: 1em;">{{num}}</span>: {{nashNumbers.getNote(num)}}
  
    </div>
   
  </div>`})
  export class YourNumbersComponent{
  @Input() p:FretboardComponent;
  @Input() nashNumbers: NashvilleNumbers;
  
  }
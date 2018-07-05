import { Component, OnInit, Input } from '@angular/core';
import { BassService } from '../Services/bass.service';

@Component(
    {
      selector:'app-nash-your-numbers',
    template: `<div class="row col" id="yourNumbers" >
    <div class="col-sm-12">
      <label for="yourNumbers">
        <strong>Your Nashville Numbers</strong>
      </label>
    </div>
    <div class="col" *ngFor="let num of [1,2,3,4,5,6,7]">  
      <span [ngClass]="bs.getNashNumberBadgeClassByNum(num)" style="font-size: 1em;">{{num}}</span>: {{bs.nashNumbers.getNote(num)}}  
    </div>   
  </div>`})
  export class YourNumbersComponent{
  bs: BassService;
    constructor(private bassService: BassService){
      this.bs = bassService;
    } 
  }

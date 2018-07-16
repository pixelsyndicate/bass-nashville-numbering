import { Injectable} from '@angular/core';
import {MajorScale, MajorPentatonicScale, MinorScale, MinorPentatonicScale, BluesScale } from '../Models/Scales';

@Injectable({
  providedIn: 'root'
})
export class ScaleService {

  private majorScale: MajorScale;
  private majorPentatonicScale: MajorPentatonicScale;
  private minorScale: MinorScale;
  private minorPentatonicScale: MinorPentatonicScale;
  private bluesScale: BluesScale;
  
  constructor() {
    this.majorScale = new MajorScale();
    this.majorPentatonicScale = new MajorPentatonicScale();
    this.minorScale = new MinorScale();
    this.minorPentatonicScale = new MinorPentatonicScale();
    this.bluesScale = new BluesScale();
  }

  getScales():any{
   
    return [this.majorScale, this.majorPentatonicScale, this.minorScale, this.minorPentatonicScale, this.bluesScale];

  }
}




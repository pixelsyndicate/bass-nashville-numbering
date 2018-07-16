import { Injectable, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import * as SVG from 'svg.js';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  metro: Metronome;
  currentMeasure: number;
  currentBeat: number;
  measuresElapsed: number;
  ticks: number;
  ticker: Observable<number>;
  tempoChanges: Array<TempoChangeRule>;
  visualCue: SVG.Doc;
  lightOn: boolean = true;
  audioElement: HTMLAudioElement;

  constructor() {
    this.metro = new Metronome();
    this.currentMeasure = 0;
    this.currentBeat = 0;
    this.measuresElapsed = 0;
    this.avgDiffBuffer = [];
  }

  /* BEGIN TAP TO SET TEMPO */

  tempoEntries: number[];
  avgDiffBuffer: number[];

  tempoEntriesMax: number;
  tempoEntriesBufferTimeout: number;
  averageMs: number = 0;
  msMultiplier: number;

  getTapAccuracy(): number {
    return this.tempoEntries.length * (this.tempoEntriesMax);
  }

  private bpm2ms(bpm: number): number {
    let mills_in_minute = 60000;
    return (mills_in_minute / bpm);
  }

  private ms2bpm(ams: number): number {
    let mills_in_minute = 60000;
    return mills_in_minute / ams;
  }



  tap2tempo() {
    const now = window.performance.now();
    let avgTs: number = this.avgTimespan(now);
    this.averageMs = avgTs;
    this.metro.tempo = Math.round(this.ms2bpm(avgTs * this.msMultiplier))
  }

  // this should take current unix time and add it to an array of previous, and return the average.
  avgTimespan(t: number): number {
    // get the total of all numbers so we can average later
    let totalTs: number = 0;
    // set timer subscription to clear this entry out after buffertimeout 
   // totalTs = this.tapBufferAction(t);
     // if has < max entries push into buffer.
     if (this.tempoEntries.length < this.tempoEntriesMax) {
      this.tempoEntries.push(t);
    }
    else {
      this.tempoEntries.splice(0, 1);
      this.tempoEntries.push(t);
    }

    // if (this.tempoEntries.length)
    // totalTs = this.tempoEntries.reduce(function (a, b) { return a + b; });

    // only keep the buffer for *n* seconds. then clear it out.
    let subsc = interval(this.tempoEntriesBufferTimeout * 1000)
      .subscribe(() => {
        this.tempoEntries.splice(0, 1);
        this.avgDiffBuffer.splice(0, 1);
        subsc.unsubscribe();
      });

    // get average diffs and output
    this.tempoEntries.forEach((entry, i, arr) => {
      let val = entry;
      if(arr[i-1]){
        let prevEntry=arr[i-1];
        let diffVal = (val - prevEntry);
        this.avgDiffBuffer.push(diffVal);
      }
   
    });

    var sum, avg = 0;
    // dividing by 0 will return Infinity
    // arr must contain at least 1 element to use reduce
    if (this.avgDiffBuffer.length) {
      sum = this.avgDiffBuffer.reduce(function (a, b) { return a + b; });
      avg = sum / this.avgDiffBuffer.length;
    }
    console.log("The avgDiffBuffer sum is: " + sum + ". The avgDiffBuffer average is: " + avg);
    return avg;
  }

  tapBufferAction(num: number): number {

    // if has < max entries push into buffer.
    if (this.tempoEntries.length < this.tempoEntriesMax) {
      this.tempoEntries.push(num);
    }
    else {
      this.tempoEntries.splice(0, 1);
      this.tempoEntries.push(num);
    }

    let sum: number = 0;
    if (this.tempoEntries.length)
      sum = this.tempoEntries.reduce(function (a, b) { return a + b; });

    // only keep the buffer for *n* seconds. then clear it out.
    let subsc = interval(this.tempoEntriesBufferTimeout * 1000)
      .subscribe(() => {
        this.tempoEntries.splice(0, 1);
        this.avgDiffBuffer.splice(0, 1);
        subsc.unsubscribe();
      });

    return sum;
  };

  emptyBuffer(subs: Subscription): void {
    this.tempoEntries.splice(0, 1);
    this.avgDiffBuffer.splice(0, 1);
    subs.unsubscribe();
  }

  /* END TAP TO SET TEMPO */

  startTimer(bpm: number): void {

    this.metro.timerStart();

    if (this.currentMeasure === 0) this.currentMeasure = 1;

    let bpmInterval = (60 / bpm) * 1000;
    console.log("setting bpm ticks for every " + bpmInterval + " ms");
    this.ticker = interval(bpmInterval);
    let subsc = this.ticker.subscribe((t) => this.toBeatOrNotToBeat(t as number, subsc as Subscription));
  }

  private toBeatOrNotToBeat(t: number, s: Subscription): any {
    // if timer stopped then unsubscribe
    if (this.metro.getTimerState() === "stopped" || this.metro.getTimerState() === "paused") {
      s.unsubscribe();
      this.fadeOut();
      return;
    }
    else {
      // check rules
      this.tempoChanges.forEach((tc) => {

        if (tc.done == false && tc.afterMeasure == this.measuresElapsed) {
          s.unsubscribe();
          this.fadeOut();
          this.metro.timerPause();
          this.metro.tempo = tc.changeTempo;
          tc.done = true;
          this.startTimer(this.metro.tempo);
          return;
        }
      });

      // todo: maybe dont need this here
      this.fadeIn();
      this.doBeat(t);
    }

  }

  private playSound() {

    this.audioElement.play().then(() => {

    }).catch((error) => {
      // An error ocurred or the user agent prevented playback.
      console.log("Error: " + error);
    });
  }

  private doBeat(t: number): any {

    let animIn = { duration: 250, ease: '<', delay: 100 };
    let animOut = { duration: 250, ease: '>', delay: 0 };
    let redBulb = this.visualCue.select('#fg').first();
    redBulb.animate(animIn).attr({ 'fill-opacity': 1 });
    this.audioElement.play();
    this.ticks = t + 1;
    redBulb.animate(animOut).attr({ 'fill-opacity': 0.1 });

    if (++this.currentBeat > this.metro.timesignature[0]) {
      this.resetBeat();
      this.measuresElapsed++;
      if (++this.currentMeasure > this.metro.timesignature[1]) {
        this.resetMeasure();
      }
    }

  }

  private resetBeat(): void {
    this.currentBeat = 1;
  }
  private resetMeasure(): void {
    this.currentMeasure = 1;
  }

  pauseTimer(): void {
    this.metro.timerPause();
  }

  stopTimer() {
    this.metro.timerStop();

    this.ticks = 0;
    this.currentBeat = 0;
    this.currentMeasure = 0;
    this.measuresElapsed = 0;

    this.tempoChanges.forEach(tc => {
      tc.done = false;
    });
  }


  // should i use svg.js to manipulate this? (in clickservice)
  // <svg width="50"  height="50" class="float-right">
  //  <circle id="lightOff" cx="25"  cy="25"  r="22" stroke="silver" stroke-width="2" fill="gray" class="" />
  //  <circle id="lightOn"  cx="25"  cy="25"  r="22" stroke="silver" stroke-width="2" fill="red" class="fade-out one" />
  // </svg>

  fadeIn() {
    this.lightOn = true;
    let anim = { duration: 250, ease: '<', delay: 100 };
    this.visualCue.select('#fg').first()
      //.animate(anim)
      .attr({ 'fill-opacity': 1 });
  }

  fadeOut() {
    this.lightOn = false;
    let anim = { duration: 100, ease: '>', delay: 0 };
    this.visualCue
      .select('#fg').first(

      )
      // .animate(anim)
      .attr({ 'fill-opacity': .1 });
  }

  clearStyle() {
    // this.fadeOut();
    // let svgs = document.querySelector('svg circle#lightOn');
    // if (svgs) {
    //   svgs.classList.remove('fade-out');
    //   svgs.classList.remove('fade-in');
    //   svgs.classList.remove('one');
    // }
  }

}

export class TempoChangeRule {
  afterMeasure: number;
  changeTempo: number;
  done: boolean;

  constructor() {
    this.afterMeasure = null;
    this.changeTempo = null;
    this.done = false;
  }
}

export class Metronome implements OnInit {

  public timerStop() {
    this.timerPaused = false;
    this.timerStarted = false;
  }
  public timerPause() {
    this.timerPaused = true;
  }
  public timerStart() {
    this.timerStarted = true;
    this.timerPaused = false;
  }
  public getTimerState() {
    return (this.timerPaused) ? "paused" : (this.timerStarted) ? "running" : "stopped";
  }
  public timerStarted: boolean;
  public timerPaused: boolean;
  public tempo: number;
  public timesignature: number[];



  ngOnInit(): void {

  }

  constructor(tempo: number = 60, signature: Array<number> = [4, 4]) {
    this.tempo = tempo;
    this.timesignature = signature;
  }


}

import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-fretboard-marker',
    template: `
        <span *ngIf="i == 0">OPEN</span>
        <i class="fas fa-circle" style="font-size: .8em;" *ngIf="i > 0 && m.marker=='.'"></i>            
        <i class="fas fa-circle" style="font-size: .8em;" *ngIf="i > 0 &&  m.marker=='..'"></i>
        <i class="fas fa-circle" style="font-size: .8em;" *ngIf="i > 0 &&  m.marker=='..'"></i>`})
export class MarkersComponent {
    @Input() m: any;
    @Input() i: number;

    constructor() { }

}



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { BassService } from './Services/bass.service';
import { ChordService } from './Services/chord.service';
import { ScaleService } from './Services/scale.service';


import { FretboardComponent } from './fretboard/fretboard.component';
import { YourNumbersComponent } from './fretboard/yournumbers.component';
import { BassScalesComponent } from './bass-scales/bass-scales.component';
import { ChordsComponent } from './chords/chords.component';
import { MarkersComponent } from './fretboard/markers.component';
import { FretComponent } from './fretboard/fretboard.fret.component';
import { NNLegendComponent } from './fretboard/nnlegend.component';
import { ChordComponent } from './chords/chord.component';

@NgModule({
  declarations: [AppComponent, FretboardComponent, BassScalesComponent, ChordsComponent, MarkersComponent, FretComponent, NNLegendComponent, YourNumbersComponent, ChordComponent], // components, directives and pipes that belong to this module
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ChordService, BassService, ScaleService], // list of dependency injection providers visible to this and any importers of this module
  bootstrap: [AppComponent]
})
export class AppModule { }

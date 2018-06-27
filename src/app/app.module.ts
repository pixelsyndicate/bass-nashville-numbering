import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FretboardComponent} from './fretboard/fretboard.component';
import { YourNumbersComponent } from './fretboard/yournumbers.component';
import { BassScalesComponent } from './bass-scales/bass-scales.component';

import { OctivesComponent } from './octives/octives.component';
import { MarkersComponent } from './fretboard/markers.component';
import { FretComponent } from './fretboard/fretboard.fret.component';
import { NNLegendComponent } from './fretboard/nnlegend.component';


@NgModule({
  declarations: [AppComponent, FretboardComponent, BassScalesComponent, OctivesComponent, MarkersComponent, FretComponent, NNLegendComponent, YourNumbersComponent], // components, directives and pipes that belong to this module
  imports: [BrowserModule, FormsModule], // list of other modules to import (makes available to the declarations: )
  providers: [], // list of dependency injection providers visible to this and any importers of this module
  bootstrap: [AppComponent] // anything that needs bootstrapping when this module is bootstrapped.
})
export class AppModule { }

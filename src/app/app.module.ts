
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// services
import { BassService } from './Services/bass.service';
import { ChordService } from './Services/chord.service';
import { ScaleService } from './Services/scale.service';
import { ClickService } from './Services/click.service';

// components
import { AppComponent } from './app.component';
import { FretboardComponent } from './fretboard/fretboard.component';
import { YourNumbersComponent } from './fretboard/yournumbers.component';
import { BassScalesComponent } from './bass-scales/bass-scales.component';
import { ChordsComponent } from './chords/chords.component';
import { MarkersComponent } from './fretboard/markers.component';
import { FretComponent } from './fretboard/fret.component';
import { NNLegendComponent } from './fretboard/nnlegend.component';
import { VoicesComponent } from './chords/voices.component'
import { MetronomeComponent } from './metronome/metronome.component';
import { TapClickComponent } from './metronome/tap-click/tap-click.component';
import { RedLightComponent } from './metronome/red-light/red-light.component';
import { TempoRulesComponent } from './metronome/tempo-rules/tempo-rules.component';
import { MetroFaceComponent } from './metronome/metro-face/metro-face.component';


@NgModule({
  declarations: [AppComponent, FretboardComponent, BassScalesComponent, ChordsComponent, MarkersComponent, FretComponent, 
    NNLegendComponent, YourNumbersComponent, VoicesComponent, MetronomeComponent, TapClickComponent, RedLightComponent, TempoRulesComponent,
   MetroFaceComponent], 
  imports: [BrowserModule, FormsModule, AppRoutingModule, ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })],
  providers: [ChordService, BassService, ScaleService, ClickService],
  bootstrap: [AppComponent]
})
export class AppModule {
  

 }

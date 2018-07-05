import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { FretboardComponent } from './fretboard/fretboard.component';
import { BassScalesComponent } from './bass-scales/bass-scales.component';
import { ChordsComponent } from './chords/chords.component';

const routes: Routes = [
  { path: '', redirectTo: '/nashville', pathMatch: 'full' },
  { path: 'scales', component: BassScalesComponent },
  { path: 'chords', component: ChordsComponent },
  { path: 'nashville', component: FretboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] //<-- by exporting, AppModule can use <Router-Outlet>
})
export class AppRoutingModule { }

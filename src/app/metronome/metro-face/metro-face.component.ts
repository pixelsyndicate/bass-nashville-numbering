import { Component, OnInit } from '@angular/core';
import { ClickService } from '../../Services/click.service';
import * as SVG from 'svg.js';
@Component({
  selector: 'app-metro-face',
  templateUrl: './metro-face.component.html',
  styleUrls: ['./metro-face.component.css']
})
export class MetroFaceComponent implements OnInit {

  clickService: ClickService;

  constructor(clickService: ClickService) {
    this.clickService = clickService;
  }

  ngOnInit() {
    if (SVG.supported) {


      // alternate interface from SVG?
      // let faceRadius = 185.48;
      // let draw = SVG('TrackFace').viewbox(0, 0, faceRadius, faceRadius);
      // let ui_face = draw.group().attr({ id: 'ui_face' });
      // ui_face.circle(faceRadius / 2)
      //   .attr({ 'id': 'face_bg', r: faceRadius / 2, 'cx': faceRadius / 2, 'cy': faceRadius / 2, fill: 'black', 'fill-opacity': 1 });
      // ui_face.path("M17.74,142.68h150a90.31,90.31,0,0,1-150,0Z")
      //   .attr({ id: 'lower_face_arc' })
      //   .style({ fill: '#fff', stroke: '#fff', 'stroke-miterlimit': 10, 'stroke-width': '2px' });
      
      // let current_beat = ui_face.group().attr({id:'current_beat'});
      // let time_signature = ui_face.group().attr({id:'time_signature'});
      // let division_display = ui_face.group().attr({id:'division_display'});

      // let beatText = current_beat.text('0')
      // .translate(82, 108.84)
      // .style({
      //   'font-size': '100px', 'fill': 'none',
      //   'stroke': '#fff', 'stroke-miterlimit': '10', 'stroke-width': '1.7249056100845337px',
      //   'font-family': 'MyriadPro-Regular, Myriad Pro'
      // }).attr({id:'currentBeat'});
      // // <g id="current_beat">
      // //   <text transform="translate(82 108.84)" style="font-size: 100px;fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.7249056100845337px;font-family: MyriadPro-Regular, Myriad Pro">| |</text>
      // // </g>

      // let tsText0 = time_signature.text('4').translate(20, 110).style({ 'font-size': '18px', 'fill': '#fff', 'font-family': 'MyriadPro-Regular, Myriad Pro' })
      // let tsSlash = time_signature.text('/').translate(38, 110).style({ 'font-size': '18px', 'fill': '#fff', 'font-family': 'MyriadPro-Regular, Myriad Pro' })
      // let tsText1 = time_signature.text('4').translate(50, 110).style({ 'font-size': '18px', 'fill': '#fff', 'font-family': 'MyriadPro-Regular, Myriad Pro' })

      // let blinkDisplay = division_display.
      //   path("M44.77,44.59v50.6c0,6.63-4.7,12-10.5,12s-10.5-5.37-10.5-12,4.7-12,10.5-12a9.56,9.56,0,0,1,6,2.16V44.59Z").
      //   style({ fill: '#c1272d', opacity: 1 }).attr({ id: 'quarternote' });
      // //blinkDisplay.id('quarternote');

      // let tempo_display = ui_face.group().move(0, faceRadius - 45);

      // let bpmVal = tempo_display.text('120').dmove(faceRadius / 4, 3).style({ 'font-size': '18px', 'font-family': 'MyriadPro-Regular, Myriad Pro' })
      //   .attr({ id: 'bpmVal' });
      // let bpmText = tempo_display.text('BPM').dmove(faceRadius / 2, 3).style({ 'font-size': '18px', 'font-family': 'MyriadPro-Regular, Myriad Pro' });


      // this.clickService.trackFace = draw;
      // this.clickService.SvgUi.beatText = beatText;
      let faceDivisionDisplay = SVG.select('g#division_display path#quarternote')
      .first();
      
    this.clickService.pulseElementCollection.push(faceDivisionDisplay);    
    this.clickService.fadeOut([faceDivisionDisplay]);
    }
    else {
      alert('SVG not supported');
    }


  }

}

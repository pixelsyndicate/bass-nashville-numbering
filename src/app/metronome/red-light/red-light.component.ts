import { Component, OnInit, Input } from '@angular/core';
import { ClickService } from '../../Services/click.service';
import * as SVG from 'svg.js';

@Component({
  selector: 'app-red-light',
  //template: `<div id="PulseSvg"></div>`,
  templateUrl: './red-light.component.html',
  styleUrls: ['./red-light.component.css']
})
export class RedLightComponent implements OnInit {

  clickService: ClickService;
  redLight;

  constructor(clickService: ClickService) {
    this.clickService = clickService;
  }

  ngOnInit() {
    if (SVG.supported) {
      //this.clickService.visualCue =
      let _svg = SVG('PulseSvg').size(75, 75);
      let _bgC = _svg.circle(60)
        .attr({ 'id': 'bg', 'cx': 30, 'cy': 30, fill: 'black', 'fill-opacity': 1 });
      let _fgC = _svg.circle(60)
        .attr({ 'id': 'fg', 'cx': 30, 'cy': 30, fill: 'red', 'fill-opacity': 0.1 });
      let _fgH = _svg.circle(40)
        .attr({ 'cx': 33, 'cy': 25, fill: 'white', 'fill-opacity': 0.4 });
      // let _fgH2 = _svg.circle(15)
      // .attr({'cx': 27, 'cy': 20, fill: 'white', 'fill-opacity': 0.2 });

      this.clickService.visualCue = _svg;

    }
    else {
      alert('SVG not supported');
    }


  }

}


//import { Component, OnInit, Input } from '@angular/core';
//import { ClickService } from '../../Services/click.service';
//import * as SVG from 'svg.js';

@Component({
  selector: 'app-track-face',
  template: `
  <div class="row">
  <div class="col">  
  <div id="TrackFace" style="width:75%; height:auto;"></div>
  </div>
  <div class="col">
  <div style="width:75%; height:auto;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.48 185.48">
              <title>click_track_face</title>
              <g id="ui_face" data-name="Layer 2">
                <g id="click_track_face">
                  <circle id="face_bg" cx="92.74" cy="92.74" r="92.74"/>                  
                  <g id="current_beat">
                    <text transform="translate(82 108.84)" style="font-size: 100px;fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.7249056100845337px;font-family: MyriadPro-Regular, Myriad Pro">| |</text>
                  </g>
                  <g id="time_signature">
                    <text transform="translate(43.28 130.48)" style="font-size: 18px;fill: #fff;font-family: MyriadPro-Regular, Myriad Pro">4</text>
                    <text transform="translate(31.32 130.48)" style="font-size: 18px;fill: #fff;font-family: MyriadPro-Regular, Myriad Pro">/</text>
                    <text transform="translate(17.64 130.48)" style="font-size: 18px;fill: #fff;font-family: MyriadPro-Regular, Myriad Pro">4</text>
                  </g>
                  <g id="division_display">
                    <path id="quarternote" d="M44.77,44.59v50.6c0,6.63-4.7,12-10.5,12s-10.5-5.37-10.5-12,4.7-12,10.5-12a9.56,9.56,0,0,1,6,2.16V44.59Z" style="fill: #c1272d; opacity: 0.3;"/>
                      
                  </g>                        
                    <path id="lower_face_arc" d="M17.74,142.68h150a90.31,90.31,0,0,1-150,0Z" style="fill: #fff;stroke: #fff;stroke-miterlimit: 10;stroke-width: 2px"/>
                  <g id="tempo_display">
                    <text transform="translate(98.33 167.74)" style="font-size: 18px;font-family: MyriadPro-Regular, Myriad Pro">bpm</text>
                    <text transform="translate(56.22 167.74)" style="font-size: 18px;font-family: MyriadPro-Regular, Myriad Pro">120</text>
                  </g>
                </g>
              </g>
            </svg>
        </div></div>
  </div>`,
  //templateUrl: './red-light.component.html',
  //styleUrls: ['./track-face.component.css']
})
export class TrackFaceComponent implements OnInit {

  clickService: ClickService;
  redLight;

  constructor(clickService: ClickService) {
    this.clickService = clickService;
  }

  ngOnInit() {
    if (SVG.supported) {
     
      
      // alternate interface from SVG?
      let faceRadius =185.48;
      let draw = SVG('TrackFace').size(faceRadius, faceRadius).viewbox(0, 0, faceRadius, faceRadius);
      let ui_face = draw.group();
      let face_bg = ui_face.circle(faceRadius/2).attr({ 'id': 'bg', r:faceRadius/2, 'cx': faceRadius/2, 'cy': faceRadius/2, fill: 'black', 'fill-opacity': 1 });
      let lower_face_arc = ui_face.path("M17.74,142.68h150a90.31,90.31,0,0,1-150,0Z").style({ fill: '#fff', stroke: '#fff', 'stroke-miterlimit': 10, 'stroke-width': '2px' });
      //face_bg.radius(faceRadius/2);
      //face_bg.cx(faceRadius/2); face_bg.cy(faceRadius/2);
      let click_track_face = ui_face.group();
      let current_beat = ui_face.group();
      let time_signature = ui_face.group();
      let division_display = ui_face.group();
   
      let beatText = current_beat.text('0').translate(82,108.84).style({'font-size': '100px','fill': 'none',
      'stroke': '#fff','stroke-miterlimit': '10','stroke-width': '1.7249056100845337px',
      'font-family': 'MyriadPro-Regular, Myriad Pro'});
    // <g id="current_beat">
    //   <text transform="translate(82 108.84)" style="font-size: 100px;fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 1.7249056100845337px;font-family: MyriadPro-Regular, Myriad Pro">| |</text>
    // </g>

    let tsText0 = time_signature.text('4').translate(20,110).style({'font-size': '18px','fill':'#fff','font-family': 'MyriadPro-Regular, Myriad Pro'})
    let tsSlash = time_signature.text('/').translate(38,110).style({'font-size': '18px','fill':'#fff','font-family': 'MyriadPro-Regular, Myriad Pro'})
    let tsText1 = time_signature.text('4').translate(50,110).style({'font-size': '18px','fill':'#fff','font-family': 'MyriadPro-Regular, Myriad Pro'})

    let blinkDisplay = division_display.
    path("M44.77,44.59v50.6c0,6.63-4.7,12-10.5,12s-10.5-5.37-10.5-12,4.7-12,10.5-12a9.56,9.56,0,0,1,6,2.16V44.59Z").
    style({fill: '#c1272d', opacity: 1}).attr({id:'quarternote'});
    //blinkDisplay.id('quarternote');
   
      let tempo_display = ui_face.group().move(0,faceRadius-45);
     
      let bpmVal = tempo_display.text('120').dmove(faceRadius/4,3).style({'font-size': '18px','font-family': 'MyriadPro-Regular, Myriad Pro'})
      .attr({id:'bpmVal'});
      let bpmText = tempo_display.text('BPM').dmove(faceRadius/2,3).style({'font-size': '18px','font-family': 'MyriadPro-Regular, Myriad Pro'});


     this.clickService.trackFace = draw;
    }
    else {
      alert('SVG not supported');
    }


  }

}

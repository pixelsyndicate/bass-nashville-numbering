import { Component, OnInit } from '@angular/core';
import { ClickService, Metronome, TempoChangeRule } from '../Services/click.service';


@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})
export class MetronomeComponent implements OnInit {

  metro: Metronome;
  clickService: ClickService;


  private sortByAfterMeasure(list: TempoChangeRule[]): TempoChangeRule[] {
    // temporary array holds objects with position and sort-value
    var mapped = list.map(function (el, i) {
      return { index: i, value: el.afterMeasure };
    });
    // sorting the mapped array containing the reduced values
    mapped.sort(function (a, b) {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });

    // container for the resulting order
    var result = mapped.map(function (el) {
      return list[el.index];
    });
    return result;
  }

  getOrderedTempoChanges(): Array<TempoChangeRule> {

    return this.sortByAfterMeasure(this.clickService.tempoChanges);

  }

  addNewRule() {
    this.clickService.tempoChanges.push({ afterMeasure: null, changeTempo: null, done: false });
  }

  addRule(rule: TempoChangeRule) {
    let newRule = { afterMeasure: rule.afterMeasure, changeTempo: rule.changeTempo, done: rule.done }
    this.clickService.tempoChanges.push(newRule);
  }

  deleteRule(r: TempoChangeRule) {
    let currentChanges = this.clickService.tempoChanges;
    let targetIndex = currentChanges.findIndex(x => x.afterMeasure == r.afterMeasure && x.changeTempo == r.changeTempo && x.done == r.done);
    this.clickService.tempoChanges.splice(targetIndex, 1);
  }

  constructor(clickService: ClickService) {
    this.clickService = clickService;
    this.metro = clickService.metro;
  }

  ngOnInit() {
    this.clickService.tempoChanges = [];
    this.clickService.audioElement = document.querySelector("#clickSound") as HTMLAudioElement;
    // push in some new rules
    // this.addRule({ afterMeasure: 4, changeTempo: 100, done: false });
    // this.addRule({ afterMeasure: 8, changeTempo: 120, done: false });
    // this.addRule({ afterMeasure: 12, changeTempo: 160, done: false });
    // this.addRule({ afterMeasure: 16, changeTempo: 180, done: false });
    // this.addRule({ afterMeasure: 20, changeTempo: 160, done: false });
    // this.addRule({ afterMeasure: 24, changeTempo: 120, done: false });
    // this.addRule({ afterMeasure: 28, changeTempo: 100, done: false });
    // this.addRule({ afterMeasure: 32, changeTempo: 60, done: false });

    // insert a media element for Audio
    // like this...
    // <video height="10px" name="media" width="10px" id="clickSound">
    //    <source  type="application/ogg" src="Snd_click.ogx">
    // </video>
    let clickSrc =
      "data:application/ogg;base64,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SoUQY9BJSKW1GCuEGINQSkqttZg85xyEUlpqLcbkOecgpNRajDEm10JIKaWWYouxuBZCKim11mKsyRiVUmotthhr7cWolEpLMcYYazDG5tRajDHWWosxOrcSS4wxxlqEEcbFFmOstdcijBGyxdJarbUGY4yxubXYas25GCOMri21VmvNBQCYPDgAQCXYOMNK0lnhaHChISsBgNwAAAIhpRhjzDnnnHMOQgipUow55xyEEEIIoZRSUqUYc845CCGEUEIppaSMMeYchBBCCKWUUkppKWXMOQghhFBKKaWU0lLrnHMQQgillFJKKSWl1DnnIIRQSimllFJKSi2EEEIooZRSSimllJRSSiGEUEoppZRSSimppZRCCKWUUkoppZRSUkophRBCKaWUUkoppaSUWiullFJKKaWUUkpJLbWUUiillFJKKaWUklpKKaVSSimllFJKKSWl1FJKpZRSSimllFJKS6mllEoppZRSSimllJRSSimlVEoppZRSSikppdRaSimllEoppZRSWmsppZZSKqWUUkoppbTUWmsttZRKKaWUUkpprbWUUkoplVJKKaWUUgAA0IEDAECAEZUWYqcZVx6BIwoZJqBCQ1YCAGQAAAyjlFJJLUWCIqUYpJZCJRVzUFKKKHMOUqypQs4g5iSVijGElINUMgeVUsxBCiFlTCkGrZUYOsaYo5hqKqFjDAAAAEEAAIGQCQQKoMBABgAcICRIAQCFBYYOESJAjAID4+LSBgAgCJEZIhGxGCQmVANFxXQAsLjAkA8AGRobaRcX0GWAC7q460AIQQhCEIsDKCABByfc8MQbnnCDE3SKSh0IAAAAAIADADwAACQbQERENHMcHR4fICEiIyQlJicoAgAAAADgBgAfAABJChAREc0cR4fHB0iIyAhJickJSgAAIIAAAAAAAAggAAEBAQAAAACAAAAAAAEBT2dnUwAEQBIAAAAAAAB9egM5AgAAAGccJqISJycyOjsyNDk4NTUwOEDkwrIhDCWp/bMn+KkcSlL7Z0/wUzmIlQBCR4gZ7NMzfv/VusjwU2fAAP4U7Bwnbo13qyDaznHi1ni3CqJhkwrPzHumtxESNXkHQ9aCXzH0/PgBDCETcdxuPNyyOYRMxHG78XDL5kH6DBEKajdtdqtp9jOCIhFAX8bmhYB08rmquVWGYAQUJcd4kf7MoK3Xi5JjvEh/ZtDW6yfJ2oggsGC1iw0ztKLRUCZCRARItmNi25YAANzjeRUTuJze1+A/JCUbunz8UffNpGRDl48/6r55mj6c95QEB7UYYoWICMMg5EUnEANrw9JEbCEAgBw4+pCG/l3RNrRbQgwcIZfSdvsztmyAzCPkUtpuf8aWDZB5MFGRidQVARgVMWJ2/bpSF7GiIQAQqFTaVsg9ADwhl2ie/nBtA6Y/IZdonv5wbQOmHzT9wHcRgml3EEcT+tfNywQFMYiIMIIAGM3Ni8qqlQUkJd+ASX+PJSIp+QZM+nssEQfZNKwxQhDDUIsox/uRwxAUdeX3IozaABJAEMOWFUEBsp3yv1y6YAGMIb3Rdvh7VrPHGNIbbYe/ZzV7nPQZRmMgBEyrgikRcBA6KgiASBD8D0SjxgiAaSN2sRAAMLWOA2RFfzZvw98CGtCzoj+bt+FvAQ3oe+I8BgBY2BZrW4ZYyEQigXR/1+cv5G7mtSpg2mnVGgAAdFn/z/hR/NnBf6C7rP9n/Cj+7OA/0AcxxrlFEABYMGxW06qmgJom78tlCpaojbAb2AFWJA5UQf/P8MZfE9y2swr6f4Y3/prgtp0HyYF57gCAGIbF0cq/qk5730XFegQEYZSIAAAkNf9NTubvIjo796Tmv8nJ/F1EZ+d+IqTRGCDY7I6CqeKYQRgAL/cP3DIRZBmpIpaCbbsgAGSoARwl/yQ28s8KplXYo+SfxEb+WcG0CrsPY2LHEBMCqM2wMO1iF7VRFI0RokBBFMCR+yBasQEEsTYFANqF9bICUAAalswt0+8i/3N7tMQqFWoNC0vmlul3kf+5PVpilQq1hjWCae/G67Q8vpZ0sSBcBZWnChgAwO5gt9ktdsPRsKrdNGwAYBSxwiBmxC62rW1s2WmtprUlhokRDQyyLAehrHpZNavZA4AJQuEgjIRyEAL8BwAQxogZwUEokPEmak8I5PzH/kd6lgJ+AQAAWISRaGAEAAAwPz8/Pz9fBgAuq1io2NiybUUVABUVFbWwqxVr26KiAgDzVVUvX7582VYBAAq4Cgc5dOj5a7B14hCAiw+UFwHO2q60uXtjl8w5Q3YA7WiRDAAellzu2ze5Ae9GnTP1hiWX+/ZNbsC7UedMvbRtyuuQQBoMqhpUBQAAnjgAQQ3bdti2YikqCoAKomJa27ZlNRLKAgCwHESlEIVSKJBRGAllWQhwIez/dNvd7a8CsEA1gQMjjCxA0SMNVcStZh2zsNnOPuGvYlKOxAGoRi+JBgpFKAyAKP/pydhmXep9RV+mSEsyj1ePBPIVbGdD0Ag2C8YMgM9hd3YdZHq2MCQF5yD1lXHk/LjGpr65+6HWOhl6AD4lAz6W3PwsX6QBNjCW3PwsX6QBNoBAZopBY5gUY2JUDQoAAAAATJ7hwedkYpMEEAtAFobAIhIAMhZBuAbmz429NFbigUJhBMZEBryABWB1ydYEJnlkvZiUxb3MfBgAWG6TFoWuv0LijQyBrZGx0kN9ol7uJnlnHkpukjBwA1n1UmeQkWKRDF/KfMpIXhZYd69cviUPXIq4/YLWVoV7wszbdEbr9sSsKLIN6rUs6nDCMwFL8QD+dfzvKF9KAAf4Ov57li9NAAcAAAAAAAAAAAAAAAAAAAA=";

    let  aud: HTMLAudioElement = 
    document.createElement('audio');
    aud.setAttribute('id', 'clickSound');
    aud.setAttribute('name','media');
    aud.setAttribute('height','10px');
    aud.setAttribute('width','10px');
    aud.setAttribute('style',"display:none");
    let audSrc: HTMLSourceElement = document.createElement('source');
    audSrc.setAttribute('type','application/ogg');
    audSrc.setAttribute('src',clickSrc);
    aud.appendChild(audSrc);
    
    document.body.appendChild(aud);


//
// <svg width="50"  height="50" class="float-right">
// <circle id="lightOff" cx="25"  cy="25"  r="22" stroke="silver" stroke-width="2" fill="gray" class="" />
// <circle id="lightOn"  cx="25"  cy="25"  r="22" stroke="silver" stroke-width="2" fill="red" class="fade-out one" />
// </svg>
  }

}

import { Component, OnInit } from '@angular/core';
import { ClickService, TempoChangeRule } from '../../Services/click.service';

@Component({
  selector: 'app-tempo-rules',
  templateUrl: './tempo-rules.component.html',
  styleUrls: ['./tempo-rules.component.css']
})
export class TempoRulesComponent implements OnInit {

  clickService: ClickService;

  constructor(clickService: ClickService) {
    this.clickService = clickService;
  }

  ngOnInit() { }

  getOrderedTempoChanges(): Array<TempoChangeRule> {

    return this.sortByAfterMeasure(this.clickService.tempoChanges);

  }

  
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
    console.log('deleted rule');
  }

  validateRules(){
    this.clickService.tempoChanges.forEach((r) => {
      console.log('checking for empty rules: afterMeasure=' + r.afterMeasure + ' | changeTempo=' + r.changeTempo );
      if(!r.afterMeasure || !r.changeTempo)
      this.deleteRule(r);
    })
  }
}

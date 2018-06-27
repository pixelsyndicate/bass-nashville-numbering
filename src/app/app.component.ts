import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


 bassStrings: number = 5;

 showPage:string;

  filterStrings(stringObjs: any[], strType: number) {
    let toReturn = [];
    stringObjs.forEach(e => {
      if (e.stringType as number <= strType)
        toReturn.push(e);
    });
    return toReturn;
  }
  
}

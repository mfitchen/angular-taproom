import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];

  constructor(){
    this.kegs = [
      new Keg("Winter Wheat", "Epicodus Brewing Company", "American Wheat Ale", 8.5, 4.0, 0),
      new Keg("Stabby Lambda", "Ruby Brewery", "India Pale Ale", 4.5, 6.0, 1),
      new Keg("Flexbox Cider", "SassY Ass Brewing", "Dry Cider", 3.5, 5.0, 2),
      new Keg("Angular Grinder", "Hashrocket Brew House", "Stout", 6.5, 6.0, 3)
    ];
  }

  kegWasSelected(clickedKeg: Keg): void {
    console.log("parent", clickedKeg);
  }
}

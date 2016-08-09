import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template:`
  <div>
    <label>{{ keg.brand }} | {{ keg.name }}</label>
  </div>
  `
})


export class KegComponent {
  public keg: Keg;
  sellPint() {
    this.keg.quantity -= 1;
  }
}

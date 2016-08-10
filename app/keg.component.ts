import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template:`
  <div>
    <button (click)="sellPint()"><i class="fa fa-beer" aria-hidden="true"></i></button><br><label><span class="mini">BREWERY:</span> {{ keg.brand }}<br><span class="mini">NAME:</span> {{ keg.name }}</label>
  </div>
  `
})


export class KegComponent {
  public keg: Keg;
  sellPint() {
    this.keg.quantity -= 1;
  }
}

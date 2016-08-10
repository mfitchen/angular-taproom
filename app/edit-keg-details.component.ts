import { Component } from 'angular2/core';
import { Keg } from './keg.model'

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <div class="keg-form">
      <h3>Edit Keg Details:</h3>
      <input [(ngModel)]="keg.name" class="col-sm-8 input-lg"/>
      <input [(ngModel)]="keg.brand" class="col-sm-8 input-lg"/>
      <input [(ngModel)]="keg.style" class="col-sm-8 input-lg"/>
      <input [(ngModel)]="keg.alc" type="number" class="col-sm-8 input-lg"/>
      <div class="col-sm-2">
        <select [(ngModel)]="keg.price" class="form-control input-lg">
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      <input [(ngModel)]="keg.quantity" type="number" max="124" class="col-sm-8 input-lg" id="kegsLeft"/><label for="kegsLeft">&nbsp;&nbsp;{{ pintsLeft() }}% pints left in keg</label>
    </div>
  `
})

export class EditKegDetailsComponent {
  public keg: Keg;

  pintsLeft(){
    return Math.floor(this.keg.quantity / 124 * 100);
  }
}

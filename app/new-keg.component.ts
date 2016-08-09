import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Create Keg:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Brand" class="col-sm-8 input-lg" #newBrand>
    <input placeholder="Style" class="col-sm-8 input-lg" #newStyle>
    <input type="number" placeholder="Alcohol %" class="col-sm-8 input-lg" #newAlc>
    <div class="col-sm-4">
      <select class="form-control input-lg" #newPrice>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
    <br>
    <button (click)="addKeg(newName, newBrand, newStyle, newAlc, newPrice)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String[]> ;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userStyle: HTMLInputElement, userAlc: HTMLInputElement, userPrice: HTMLSelectElement){
    this.onSubmitNewKeg.emit([userName.value, userBrand.value, userStyle.value, userAlc.value, userPrice.value]);
    userName.value = "";
    userBrand.value = "";
    userStyle.value = "";
    userAlc.value = "";
  }
}

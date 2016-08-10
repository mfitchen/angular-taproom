import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { LowPipe } from './low.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [LowPipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <div class="row">
    <div class="col-md-3">
      <h1>Kegs</h1>
      <select (change)="onQuantityChange($event.target.value)" class="filter" class="col-sm-3 form-control input-lg">
        <option value="all" selected="selected">Show All Kegs</option>
        <option value="low">Show Low Kegs</option>
      </select>
      <keg-display *ngFor="#currentKeg of kegList | low:filterLow"
        (click)="kegClicked(currentKeg)"
        [class.selected]="currentKeg === selectedKeg"
        [keg]="currentKeg">
      </keg-display>
    </div>
    <div class="col-md-9">
      <h1>Keg Details</h1>
      <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
      </edit-keg-details>
    </div>
  </div>
  <div class="row">
    <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  </div>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLow: string = "all";

  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(arg: string[]): void {
    this.kegList.push(
      new Keg(arg[0], arg[1], arg[2], parseInt(arg[3]), parseInt(arg[4]), this.kegList.length)
    );

    console.log(this.kegList);
  }

  onQuantityChange(filterOption){
    this.filterLow = filterOption;
  }

}

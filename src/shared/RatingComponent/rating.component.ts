import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-rating',
  template: ` 
    <div class="crop" 
        [style.width.px]='starWidth'
        [title]='rating'
        (click) = 'onClick()'>
        <div style="width: 86px">
            <span class="glyphicon glyphicon-star"></span>
            <span class="glyphicon glyphicon-star"></span>
            <span class="glyphicon glyphicon-star"></span>
            <span class="glyphicon glyphicon-star"></span>
            <span class="glyphicon glyphicon-star"></span>
        </div>
    </div>`,
    styles: [`.crop {overflow: hidden;} div {cursor: pointer;}`]
    })
export class RatingComponent implements OnChanges {
    @Input() rating: number = 0;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;   
    }
    onClick(): void {
        this.ratingClicked.emit(`Rating of the clicked item is ${this.rating}`)
    }
}
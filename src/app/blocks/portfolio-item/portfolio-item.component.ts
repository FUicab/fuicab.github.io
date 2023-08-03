import { Component, Input } from '@angular/core';

@Component({
  selector: 'portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent {
  @Input() title:string = '';
  @Input() description:string = '';
  @Input() img:string = 'assets/img/shark.jpg';
  @Input() skillset:string[] = [];
}

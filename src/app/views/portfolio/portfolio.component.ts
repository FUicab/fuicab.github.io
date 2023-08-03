import { Component } from '@angular/core';
import * as portfolioJSON from '../../../assets/portfolio-items.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioData: any = portfolioJSON;

  ngOnInit(){
    console.log(this.portfolioData.default);
  }
}

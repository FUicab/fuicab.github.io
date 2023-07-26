import { Component, ContentChild, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'navbar-link',
  templateUrl: './navbar-link.component.html',
  styleUrls: ['./navbar-link.component.css']
})
export class NavbarLinkComponent {
  @Input() href:string = '';
  isActive = false;
  
  constructor(private router:Router){
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        if(this.href.endsWith(router.url)){
          this.isActive = true;
        } else {
          this.isActive = false;
        }
      }
    });
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'code-tabs',
  templateUrl: './code-tabs.component.html',
  styleUrls: ['./code-tabs.component.css']
})
export class CodeTabsComponent {
  tabs = [
    { enabled: true, title: "Description", key: "description" },
    { enabled: true, title: "Source code", key: "source" },
    { enabled: true, title: "Try it!", key: "try-it" },
  ];
  currentTab = 0;
  @Input() sourceCode:string = '';

  setTab(newTabIndex:number = 0){
    this.currentTab = newTabIndex;
  }
}

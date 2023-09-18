import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'prism-code',
  templateUrl: './prism-code.component.html',
  styleUrls: ['./prism-code.component.css']
})
export class PrismCodeComponent implements AfterViewInit, OnChanges {
  @ViewChild('codeEle') codeEle!: ElementRef;
  @Input() code?: string;
  @Input() language?: string;
  constructor() { }
  ngAfterViewInit() {
    Prism.highlightElement(this.codeEle.nativeElement);
  }
  ngOnChanges(changes: any): void {
    if (changes?.code) {
      if (this.codeEle?.nativeElement) {
        this.codeEle.nativeElement.textContent = this.code;
        Prism.highlightElement(this.codeEle.nativeElement);
      }
    }
  }
}
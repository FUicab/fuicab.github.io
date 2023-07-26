import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'typer',
  templateUrl: './typer.component.html',
  styleUrls: ['./typer.component.css']
})
export class TyperComponent {
  htmlContent = "";
  @ViewChild('typer', { read: ViewContainerRef }) typer:any;
  typingMemory = "";
  typingList:string[] = [];
  htmlSubTag = '';

  ngAfterViewInit(){
    this.playAutoTyping();
  }

  playAutoTyping(){
    this.typingMemory = this.typer.element.nativeElement.innerHTML;
    this.typer.element.nativeElement.innerHTML = "";
    this.htmlContent = "";
    this.typingList = this.typingMemory.trim().split(/(<.*?>)|((?![\n\t])[\w\S ])/g).filter( i => (i && i!=='\n') );
    this.htmlSubTag = "";
    this.typingList.forEach((char, i) => {
      let typingTime = (i+1)*50;
      if(/^(<.*?>)$/.exec(char)){
          typingTime -= 49;
          if((/(<br.{0,}>)/g).exec(char) || (/(<\/)/g).exec(char)){
              this.htmlSubTag = "";
          } else {
              this.htmlSubTag = char.replace(/(<)|(>)/g,'');
          }
      }
      if(this.htmlSubTag && !/^(<.*?>)$/.exec(char)){
          char = `<${this.htmlSubTag}>${char}</${this.htmlSubTag}>`;
      }
      setTimeout(() => {
        this.typer.element.nativeElement.innerHTML = this.typer.element.nativeElement.innerHTML + char;
      }, typingTime + 50);
    });
  }
}

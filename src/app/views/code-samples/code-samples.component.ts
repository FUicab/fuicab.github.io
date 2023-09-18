import { Component } from '@angular/core';

@Component({
  selector: 'app-code-samples',
  templateUrl: './code-samples.component.html',
  styleUrls: ['./code-samples.component.css']
})
export class CodeSamplesComponent {

	constructor(){
		var dis = this;
		setInterval(function(){
				dis.x = dis.rand(20);
			}, 2000)
			setInterval(function(){
				dis.i += dis.rand(10);
			}, 2000)
			setInterval(function(){
				dis.e += dis.rand(100);
			}, 1000)
	}

  	x = 0;
	i = 0;
	e = 0;
	rand(factor:number){
		return Math.round(Math.random()*factor);
		// var r = function(){
		// 	return Math.round(Math.random()*100);
		// };
		// setInterval(function(){
		// 	return r;
		// }, 500);
	}

	typerSourceCode = `@ViewChild('typer', { read: ViewContainerRef }) typer:any; /* The reference of the HTML element. */
typingMemory = "";
typingList:string[] = [];
htmlSubTag = '';

/** Call this function to run the typer.
  * You can call it using event handlers. */
playAutoTyping(){

	/* We first retrieve the HTML content from the element we're working with. */
	this.typingMemory = this.typer.element.nativeElement.innerHTML;

	/* Also, clear the content from the HTML element. */
	this.typer.element.nativeElement.innerHTML = "";
	
	/* Then, we split all the HTML tags and text.
	 * This is necessary because we don't want the tags to be actually being typed there as plain text.
	 * This regex either splits every single character or whole tags. */
	this.typingList = this.typingMemory.trim().split(/(<.*?>)|((?![\\n\\t])[\\w\\S ])/g).filter( i => (i && i!=='\\n') );

	/* During typing, if we encounter an HTML tag, we set it and start typing using it.
	 * This allows styling to be preserved while typing, but it also means that each character
	   has its own HTML tag instead of being in groups. */
	this.htmlSubTag = "";

	/* Now comes the loop!
	 * We go through all the characters and HTML tags.
	 * Remember that HTML tags are not supossed to be printed but we still want them to style our content. */
	this.typingList.forEach((char, i) => {

		/* We set the timer for each character to be typed individually.
		 * The time for each character scales with its position, ensuring that characters are not unordered.
		 * Time is in milliseconds. */
		let typingTime = (i+1)*50;

		/* Have we encountered an HTML tag? */
		if(/^(<.*?>)$/.exec(char)){

			/* If so, let's substract a bit of the timing from it or the loop will treat it as a regular character. */
			typingTime -= 49;

			/* Is this an opening tag or a closing tag? */
			if((/(<br.{0,}>)/g).exec(char) || (/(<\\/)/g).exec(char)){

				/* Closing tags will clear the HTML subtag variable.
				 * This sets the text style as default. */
				this.htmlSubTag = "";

			} else {

				/* Otherwise, we store the tag and use it to wrap the characters. */
				this.htmlSubTag = char.replace(/(<)|(>)/g,'');

			}
		}

		/* If the element is originally wrapped in an HTML tag, we wrap it again, using the declarations from above. */
		if(this.htmlSubTag && !/^(<.*?>)$/.exec(char)){
			char = \`<\${this.htmlSubTag}>\${char}</\${this.htmlSubTag}>\`;
		}

		/* Finally!
		 * We set a timer for each character, allowing them to be typed individually, just like you've seen in the demo. */
		setTimeout(() => {
			this.typer.element.nativeElement.innerHTML = this.typer.element.nativeElement.innerHTML + char;
		}, typingTime + 50);

	});
}
`;

}

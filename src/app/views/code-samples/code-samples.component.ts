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
}

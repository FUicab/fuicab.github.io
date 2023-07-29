import { Component, OnInit, Input, Output, } from '@angular/core';

@Component({
  selector: 'dynumber',
  templateUrl: './dynumber.component.html',
  styleUrls: ['./dynumber.component.css']
})
export class DynumberComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	isHigher:boolean = false;
	animate:boolean = false;
	prevValue:any = 0;
	diff:any[] = [];
	changedDigits:any[] = [];
	_value:any = 0;
	get value(): any { 
		return this._value;
	}
	@Input() set value(val: any){
		this.prevValue = this._value;
		this._value = val;
		this.animate = false;
		var dis = this;
		setTimeout(function(){
			if(dis.prevValue!=val){
				dis.animate = true;
			}
		},1);
		if(this.prevValue<val){
			this.isHigher = true;
		} else {
			this.isHigher = false;
		}
		this.digits = this.iterable(val).length;
		var difference = 0;
		if(this.isHigher){
				difference = val-this.prevValue;
			} else {
				difference = this.prevValue-val;
			}
		if(this.type=='individual'){
			// if(this.isHigher){
			// 	difference = val-this.prevValue;
			// } else {
			// 	difference = this.prevValue-val;
			// }
			this.diff = [...(difference+'')];
			var prevSplit = this.splitNumberLevels(this.prevValue);
			var splitted = this.splitNumberLevels(difference);
			if(this.digits>this.diff.length){
				let leftZeros = this.digits-this.diff.length;
				for (let i = leftZeros; i > 0; i--) {
					this.diff.unshift('0');
					splitted.unshift('0');
				}
			}
			if(this.digits>prevSplit.length){
				let leftZeros = this.digits-prevSplit.length;
				for (let i = leftZeros; i > 0; i--) {
					prevSplit.unshift('0');
				}
			}
			this.changedDigits = [...Array(this.digits)];
			if(this.iterable(this.prevValue).length!=this.digits){
				for (let i in this.changedDigits) {
					this.changedDigits[i] = true;
				}
			} else {
				var allFollowingAreChanged = false;
				for(let i in this.changedDigits){
					if(this.iterable(this.prevValue)[i]!=this.iterable(val)[i]||allFollowingAreChanged){
						allFollowingAreChanged = true;
						this.changedDigits[i] = true;
					} else {
						this.changedDigits[i] = false;
					}
				}
			}
			for (let i in this.diff) {
				let x = parseInt(prevSplit[i]);
				this.diff[i] = [];
				for (let e = 1; e<parseInt(splitted[i]); e++) {
					this.diff[i].push((x+e)%10);
				}
			}
			if(this.optimize){
				var growthIndex = 1;
				var last = this.diff.length-1;
				if(this.diff[last].length>20){
					growthIndex = 20/this.diff[last].length;
				}
				// console.log(growthIndex);
				for (var i in this.diff) {
					let scaled = Math.ceil(this.diff[i].length*growthIndex);
					this.diff[i] = this.diff[i].slice(0,scaled);
					// if(this.diff[i].length>10){
					// 	this.diff[i] = this.diff[i].slice(0,10);
					// }
				}
			}
			// console.log(prevSplit);
			// console.log(this.splitNumberLevels(val));
			// console.dir(this.changedDigits);
			// console.log(this.diff);
		}
		if(this.type=='linear'){
			// console.log(val);
			this._value = this.prevValue;
			if(this.optimize){
				if(difference<=40){
					var index = this.duration/difference;
					var numbers:number[] = [];
					for (let i = 1; i <= difference; i++) {
						numbers.push(i);
					}
					for (let i in numbers) {
						setTimeout(function(){
							dis._value = dis.prevValue+numbers[i];
						},(numbers[i]*index));
					}
				} else {
					var index = difference/40;
					var numbers:number[] = [];
					for (let i = index; i < difference; i+=index) {
						numbers.push(Math.round(i));
					}
					numbers.push(difference);
					var delay = this.duration/numbers.length;
					// console.log(numbers);
					for (let i in numbers) {
						setTimeout(function(){
							dis._value = dis.prevValue+numbers[i];
						},parseFloat(i)*delay);
					}
				}
			} else {
				var index = this.duration/difference;
				var numbers:number[] = [];
				for (let i = 1; i <= difference; i++) {
					numbers.push(i);
				}
				for (let i in numbers) {
					setTimeout(function(){
						dis._value = dis.prevValue+numbers[i];
					},(numbers[i]*index));
				}
			}
		}
		// console.log((val+'').length);
	};

	dir(x:any){
		console.dir(x);
	}
	iterable(x:any){
		return [...(x+'')];
	}
	numbers(x:any){
		var arr = new Array(x);
	}
	splitNumberLevels(x:any){
		var arr = [];
		for (var i = 0; i < (x+'').length; i++) {
			arr.push((x+'').slice(0,i+1));
		}
		return arr;
	}

	/** Specifies the spaces for numbers in boxed display */
	@Input() digits:number = 1;

	/** Optimize element generation for animations with too many elements */
	@Input() optimize:boolean = true;

	/** Animation duration in miliseconds */
	@Input() duration:number = 400;

	/** Display type */
	@Input() type:string = 'simple'; // simple, linear, individual, boxed

}

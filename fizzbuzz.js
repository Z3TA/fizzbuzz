/*
The MIT License (MIT)

Copyright (c) 2015 Johan Zetterberg (Website: http://joha.nz/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


"use strict";

function fizzBuzz() {

	var fizz, buzz;
	
	for(var i=0; i<100; i++) {
		
		fizz = i%3==0;
		buzz = i%5==0;
		
		if(fizz && buzz) {
			console.log("FizzBuzz");
		}
		else if(fizz) {
			console.log("Fizz");
		}
		else if(buzz) {
			console.log("Buzz");
		}
		else {
			console.log(i);
		}		
	}
}

fizzBuzz();

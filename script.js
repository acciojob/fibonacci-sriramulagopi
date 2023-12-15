function fibonacci(num) {
	// your code here
	let fib = 0;
	let check = 0;
	let a = 0;
	let b = 1;
	let c = 1;
	while(num>1){
		a=b;
		b=c;
		c=a+b;
		fib=a;
		num--;
		check++;
	}
	return check>0 ? fib:0;
}

console.log(fibonacci(6));

// Question 1

function tripleFive(arg) {
    for(var i = 0; i < 3; i++){
        console.log(arg)
    }
}
tripleFive("Five!");



// Question 2 

function lastLetter(arg) {
 for(var i = 0; i < arg.length; i++) {
 }
 console.log(arg[i-1])
}
lastLetter("hey");


// Question 3

function square(num) {
	var mult = num * num;
	console.log(mult);
}
square(5);


// Question 4

function negate(num) {
	if (num > 0) {
	var flip = -Math.abs(num);
	} else {
		var flip = Math.abs(num);
	}
 console.log(flip);
}
negate(-3);


// Question 5

function toArray(arg1, arg2, arg3) {
	var x = [];
	x.push(arg1);
	x.push(arg2);
	x.push(arg3);
	console.log(x);
}
toArray(1, 3, 4);


// Question 6

function startsWithA(val) {
	if (val[0] === 'A') {
		return true;
	} else {
		return false;
	}
}
startsWithA('else');


// Question 7

function excite(arg){
    console.log(arg+"!!!")
}

excite("go")


// Question 8

function sun(arg) {
	if (arg.indexOf('sun') >= 0) {
		return true;
	} else {
		return false;
	}
}
sun('sunday');


// Question 9


function tiny (arg) {
    if (arg < 1 && arg > 0) {
        return true;
    } else {
        return false;
    }
}
tiny(14);


// Question 10

function getSeconds (arg) {
    var x = arg.split(":");
    var mins = parseInt(x[0]);
    var seconds = parseInt(x[1]);
    var result = mins * 60 + seconds;
    console.log(result);
}
getSeconds('1:30');
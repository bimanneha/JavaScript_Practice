var APP = (function module() {

	var a = 2;

	var printVal = function printValue(val) {
		console.log(val);
	}

	var sumIt = function(b) {
		printVal(a + b);
	}

	var multiplyIt = function(b) {
		printVal(a * b);
	}

	return {
		sumIt: sumIt,
		multiplyIt: multiplyIt
	};

}());
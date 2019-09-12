var cnt = function counter() {
	
	var count = 0;

	var btn1 = document.getElementById('btnClick1');
	var btn2 = document.getElementById('btnClick2');

	var printCnt = function printCount() {
		document.getElementById('divCounter').innerHTML = 'The counter value is : ' + count;
		console.log('the counter : ', count);
	}

	btn1.addEventListener('click', function count1() {
		count = count + 1;
		printCnt();
	});

	btn2.addEventListener('click', function count2() {
		count = count + 1;
		printCnt();
	});
}

cnt();
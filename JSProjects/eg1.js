// Code goes here

var func1 = function() {
  var a = 2;
  var b = 3;
  
  var func2 = function() {
    var sum = a + b;
    document.getElementById("divValue").innerHTML = 'The value of sum is : ' + sum;
  }
  
  setTimeout(func2(), 1000)
}

func1();

// First Alternative

let a = () => arguments;

console.log(a('hi'));

// Second Alternative

let b = function() { return arguments };

console.log(b('hi'));

// Third Alternative

let c = (...n) => n;

console.log(c('hi'));
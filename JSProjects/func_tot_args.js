// function to return the total number of arguments passed to a function

function x() {
    return arguments.length;
}

console.log('Result is : ', x(1, 2, null));

// Alternative Approach

function y() {
    return [].slice.call(arguments).length;
}

console.log('Result is : ', y(1, 2, null, 6));


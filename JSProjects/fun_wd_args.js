function y() {
    console.log(this.length);
}

let x = {
    length: 5,
    method: function(y) {
        console.log(arguments);
        arguments[0]();
    }
};

x.method(y, 2, 3);
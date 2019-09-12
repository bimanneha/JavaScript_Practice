let x = function() {
    let a = 1;
    a = '2';

    console.log('a : ', a);

    const b = 3;
    console.log('b : ', b);

    // const c;
    // console.log('c : ', c);

    const d = [1, 2];
    d.push(3);
    d.push(4);
    console.log('d : ', d);
}

x();
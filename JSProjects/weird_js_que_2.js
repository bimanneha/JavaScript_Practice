const str = 'constructor';
console.log(str[str](007));


// this is similar to below code

const s = new String('constructor');
console.log('Step 1 :', s);
console.log('Step 2 :', s['constructor']);
console.log('Step 3 :', s.constructor);
console.log('Step 4 :', s['constructor'](007));
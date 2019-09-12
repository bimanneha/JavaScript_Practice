function func() {

    {
        (function() {
            let a = 'let';
        var b = 'var';
        })();
    }

    console.log('b is : ', b);
    console.log('a is : ', a);    
}

func();
function bilangan (input) {
    var count = 0;
    var temp = '';
    var angka = [];
    for (var i = input; i > 0; i--) {
        for (var j = input; j > count; j--) {
            temp += j;
        }
        angka.push(temp);
        temp = '';
        count++;
    }

    return angka;
}

//console.log(bilangan(5));

function multidimensi (input) {
    var num = input;

    for (var i = 0; i < num.length; i++) {
        num[i] = num[i].split('');
    }
    return num;
}

// console.log(multidimensi(bilangan(5)));

function deret (x) {
    var a = 1;
    var angka = [];
    while (a <= x) {
        if (a % 2 == 0 || a % 3 == 0) {
            angka.push(a);
        }
        a++;        
    }
    return angka;
}

//console.log(deret(15));


/* 
    deret prima (homework ka icha)

    input => output
    7 => [2, 3, 5, 7]
    9 => [2, 3, 5, 7]
    13 => [2, 3, 5, 7, 11, 13]
*/

//mengecek bilangan prima
function cekPrima (x) {
    var c = x;
    var i = 0;
    var result;
    while (c > 0) {
        if (x % c == 0) {
            i++;
        }
        c--;
    }
    if (i > 2) {
        result = false;
    } else {
        result = true;
    }
    return result;
}


//membuat deret bilangan prima
function deretPrima (x) {
    deret = [];
    for (var i = 2; i <= x; i++) {
        if (cekPrima(i)) {
            deret.push(i);
        }        
    }
    return deret;
}

//console.log(deretPrima(13));



function palindrome(kata) {
    // you can only write your code here!
    if (kata === undefined || kata === '') {
        return false;
    }
    kata = kata.toString();
    
    var result;
    var a = 0;
    var b = kata.length - 1;


    while ((kata[a] === kata[b]) && (a !== b)) {
        a++;
        b--;
    }
    if (a === b) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

//console.log(palindrome('katak'));
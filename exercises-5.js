function palindrome(kata) {
    // you can only write your code here!
    if (kata === undefined || kata === '') {
        return false;
    }
    
    var cekKata = kata.toString();
    var result;
    var balik = '';

    for (var i = cekKata.length - 1; i >= 0; i--) {
        balik += cekKata[i];
    }

    if (kata == balik) {
        result = true;
    } else {
        result = false;
    }
    return result;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
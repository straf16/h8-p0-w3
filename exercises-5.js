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
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
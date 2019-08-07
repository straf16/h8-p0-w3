function angkaPalindrome(num) {
    // you can only write your code here!
    if (num === undefined || num === '') {
        return NaN;
    }

    var balik = '';
    var cek;

    while (true) {
        num++;

        cek = String(num);
        for (var i = cek.length - 1; i >= 0; i--) {
            balik += cek[i];
        }
        
        if (balik == num) {
            return num;
            break;
        }
        balik = '';
        
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
function targetTerdekat(arr) {
    // you can only write your code here!
    if (arr == undefined) {
        return 0;
    }

    var def = Number.MAX_SAFE_INTEGER;
    var target = def;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] === 'x') {
                    if (Math.abs(i-j) < target) {
                        target = Math.abs(i-j);
                    }
                } else if (j == arr.length-1 && target == def) {
                    target = 0;
                }
            }
            break;
        } else if (i == arr.length-1 && target == def) {
            target = 0;
        }
    }
    return target;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
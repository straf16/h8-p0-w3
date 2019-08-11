function groupAnimals(animals) {
    // you can only write your code here!
    var huruf;
    var result = [];
    var j = 0;

    animals.sort();
    for (var i = 0; i < animals.length; i++) {
        var arr = [];
        i = j;
        if (j >= animals.length) {
            break;
        }
        huruf = animals[i][0];
        while (j < animals.length) {
            if (animals[j][0] == huruf) {
                arr.push(animals[j]);
            } else {
                break;
            }
            j++;
        }
        result.push(arr);
    }

    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
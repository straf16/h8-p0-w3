function balikString (balik) {
    var balikan = '';
    for (var i = balik.length - 1; i >= 0; i--) {
        balikan += balik[i];
    }
    return balikan;
}

console.log(balikString('hello world!'));
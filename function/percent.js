function diffPercent(a, b) {
    
    let sign = '<';
    if (a-b == 0)
        sign = '=';
    else if (a-b > 0) sign = '>';

    let originDIff = Math.abs(a - b);
    let average = (a+b)/2;

    let percent =  (originDIff / average) * 100;

    console.log({a, b, sign, percent})
    return {sign, percent};

}

module.exports = diffPercent;
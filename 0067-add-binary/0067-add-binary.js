/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a=BigInt("0b"+a);
    b=BigInt("0b"+b);
    let r=a+b;
    return r.toString(2);
};
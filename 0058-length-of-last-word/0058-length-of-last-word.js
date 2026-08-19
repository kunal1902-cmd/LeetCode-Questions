/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let a=s.trim();
    let word=a.split(" ");
    let k= word[word.length-1];
    return k.length;
    
};
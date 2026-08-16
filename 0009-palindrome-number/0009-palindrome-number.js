/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0)return false;
    let a,b,res=0;
    b=x;
    while(b!=0){
    a=b%10;
    b=Math.floor(b/10);
    res=(res*10)+a;
}
if(res==x){
    return true;
}
else{
    return false;
}
    
};



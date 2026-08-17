/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let r=x,p,a=0;
    r=Math.abs(x);
    while(r!=0){
        p=r%10;
        r=Math.floor(r/10);
        a=(a*10)+p;
    }
    if(a > Math.pow(2,31)-1 || a < Math.pow(-2,31)) {
        return 0;
    }
    else if (x>0){
        return a;
    }
    else{
        return -a;
    }
    return a;
};
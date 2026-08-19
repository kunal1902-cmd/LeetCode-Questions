/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x==0){
        return 0;
    }
    else if(x==1){
        return 1;
    }
    for(i=1;i<=Math.ceil(x/2);i++){
        if(i*i>x){
            return i-1;
        }
        else if(i*i==x){
            return i;
        }
    }   
    return 1; 
};
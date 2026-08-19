/**
 * @return {null|boolean|number|string|Array|Object}
 */
   Array.prototype.last = function() {
  let a,b;
    b=this.length;
    if(b==0){
        return -1;
    }
    else{
        a=this.pop();
        return a
    }
    
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let a=0,k;
    nums.every( ()=> { for(i=0;i<nums.length;i++){
        if(nums[i]==val){
        nums.splice(i,1);
        i--;
        a++;
        }
        
    }
    })
    k=nums.length;
    
    for(j=0;j<a;j++){
        nums.push("_");
    }
    
    return k;
    
};

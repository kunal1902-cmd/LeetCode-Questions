class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int size=nums.size();
        int curr=0;
        int maxVal=INT_MIN;
     for(int i=0;i<size;i++){
         curr+=nums[i];                    
         maxVal=max(maxVal,curr);
         if(curr<0){                        
                curr=0;                          
         }                                    
     }
       return maxVal; 
    }
    
};
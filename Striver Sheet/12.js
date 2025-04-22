//Maximum Consecutive Ones
//to approach this we need two variable to track max and count
//1. we will loop over array and update the count based on 1 or zero(increase or reset to 0)
//2. we will update max with count if count is greater than max.
function MaximumConsecutive(arr){
    let max=0;
    let count=0
    for(let i=0;i<arr.length;i++){
         if(arr[i]===1 ){
            count++;
         }
         if(arr[i]===0){
            count=0;
         }
         if(count>max){
            max=count;
         }
    }
    return max
}
let arr=[1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,2,3]
console.log(MaximumConsecutive(arr))
//expected output 3 because in sequence 1 comes  3 times without 0
//Find the largest element in an array.


function largest(arr){
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
           max=arr[i]
        }
    }
    return max
}
console.log(largest([1,2,3,4,5,3,123]))
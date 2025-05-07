//Find Second Smallest and Second Largest Element in an array
  function secondSmallest(arr){
    let smallest=Infinity
    let secondSmallest= Infinity;
    for(let i=0;i<arr.length;i++){
      if(arr[i]<smallest){
        secondSmallest=smallest
        smallest= arr[i]
      }
      else if(arr[i]<secondSmallest&& arr[i]>smallest){
        secondSmallest=arr[i]
      }
    }
    return secondSmallest
  }

  function secondLargest(arr){
    if(arr.length<2){
      return -1
    }

    let largest=arr[0]
    let secondLargest=0;
    for(let i=1;i<arr.length;i++){
       if(arr[i]>largest){
        secondLargest=largest
        largest=arr[i]
       }
       else if(arr[i]>secondLargest && arr[i]<largest){
        secondLargest=arr[i]
       }
    }
    return secondLargest
  }
  const arr = [1, 2, 4, 7, 7, 5];
  const sS = secondSmallest(arr);
  const sL = secondLargest(arr);
  
  console.log("Second smallest is " + sS);
  console.log("Second largest is " + sL);
  
  
  
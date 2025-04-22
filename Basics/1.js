//Count digits in a number:
function CountDigit(num){
    let count=0
    while(num>=1){
        num=Math.floor(num/10)
        count++;
    }
    return count
}
console.log(CountDigit(3456789))
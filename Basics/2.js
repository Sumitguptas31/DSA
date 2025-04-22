
function ReverseNumber(num){
    let reveredNum=0;
     while(num>0){
        let lastdigit= num%10;
        reveredNum=reveredNum*10+lastdigit;
        num=Math.floor(num/10)
     }
    return reveredNum
}
console.log(ReverseNumber(12345))
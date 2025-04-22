function palindron(str) {
  if(str.length==1){
    return true
  }
  if(str[0]===str.slice(-1)){
     return palindron(str.slice(1,-1))
  }
}
console.log(palindron("madam"))
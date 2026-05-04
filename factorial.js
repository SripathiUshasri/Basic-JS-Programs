let num=5;
let factorial=1;
if(num<1){
    console.log("Factorial doesn't exist")
}
else{
    for(let i=1;i<=num;i++ ){
        factorial*=i;
    }
    console.log(`The factorial of the  number is ${factorial}`)
}
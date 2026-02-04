
//  odd er avg ber korbo











function oddAverage(numbers){

    const odds = [];  //  eyta odd number ula arry er  vitore push korar jonno use korbo
    for (const number of numbers ){
       if (number % 2 === 1){
        // console.log(number)
      odds.push(number)
       }
 
}
// odd number gula ekhane ase
// 
let sum = 0;
for(const number of odds){
    sum =  sum + number
}
const count = odds.length  // ekhane odd array er modhe koita upadan ase seyta ber kora
console.log(sum , count)
const avg = sum / count; // oi upadan dia vag kora
return avg ;
}
 const numbers = [ 42, 13, 58 ,65 ,81 ,  96 ,7, 15]
 const avg = oddAverage(numbers);
 console.log('average of the odd numbers is :',avg)
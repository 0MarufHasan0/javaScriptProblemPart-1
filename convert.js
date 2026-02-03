//  12  inch 1 feet


function inchToFeet(inch){
    const feet = inch / 12 ;

return feet

}

const shuvoHeight = inchToFeet(75);

console.log ( shuvoHeight )


function inchToFeet2 ( inch){
    const feetFraction = inch /12 ;
    const feetNumber  = parseInt (feetFraction);
    const inchRemaining = inch % 12 ;
     const result = feetNumber + ' fit '  + inchRemaining + ' inch ';    // eyta dia tumar 6 fit  3 inch bujabe  
     return result ;
}

const shuvoHeight2 = inchToFeet2(75);
console.log (shuvoHeight2)


function mileToKilometer (mile){
    const Kilo = mile * 1.60934;
    const result = Kilo + ' kilo ';
    return result
}

const kilo2 =  mileToKilometer(2);
console.log(kilo2);
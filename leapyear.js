/**
 * leap year 
 * 
 * 
 * 
 */ 
// Simple logic 100% sotti na 
 function leapYear(year){
    if(year %4 === 0 ){
        return true;

    }
    else{
        return false;
    }
 }

 const isLipi= leapYear(2043);
 console.log(isLipi);


//   eyta 100 dia  vag jabe na  and 4 dia vag jabe

function leapYear2(year){
    if (year %100 !==0 && year %4 === 0 ){
        return true;

    }
    else{
        return false;
    }
 }

 const isLipi2= leapYear(2000);
 console.log(isLipi2);

//  100 dia vag jabe and 400 diaw jabe 

function leapYear3(year){
    if (year %100 !==0 && year %4 === 0 ){
        return true;

    }
    else if (year %100 === 0 && year %400 === 0)  {
         return true;
       
    }

    else {
        return false;
    }
 }

 const isLipi3= leapYear3(2050);
 console.log(isLipi3);
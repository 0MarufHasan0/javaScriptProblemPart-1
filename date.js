const  today = new Date ();

const date = new Date ('2062-10-19')

console.log (date.getMonth()) ;
console.log (date.getDay()) ;

const spectficdate = new Date(2091 ,  0  ,26 )
console.log(spectficdate)

spectficdate.setMonth(10)
console.log(spectficdate.toLocaleString('en-GB'))
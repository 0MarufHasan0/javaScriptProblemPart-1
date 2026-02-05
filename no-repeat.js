const biriyaniKhor = [' Aubul', 'dabul' ,'abul' ,'rahim' ,'khaim' ,'kahim' ,'abid' ,'abida' ,'babul' ,'dabul' ,' abid' , 'rahim' ] ;
// const numbers = [ 1, 2, 3, 1,  2, 4, 5, 6,4 3, 2] ;

function noDuplicate(array){
    const unique = [];
  for(const item of array){
if  (unique.includes(item) === false){
    unique.push(item) ;
    
}
  }
  return  unique ;
}

const uniqueArray = noDuplicate(biriyaniKhor);
console.log ( uniqueArray) 
/*
function forLoop (array) {
  for (let i=0; i<25; i++) {
  if (i==1) {
    array.push ("I am 1 strange loop.");
    return array;
  } else {
    array.push ("I am ${i} strange loops.");
    return array;
  }
}
}
*/
function forLoop (array) {
  for (let i=0; i<25; i++) {
    array.push(`I am ${i} strange loop${i===0 ? '' : 's'}.`)
   
  } 
  return array
}
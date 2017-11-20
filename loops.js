function forLoop (array) {
  for (let i=0; i<25; i++) {
  if (i==1) {
    array[1] = "I am 1 strange loop.";
    return array;
  } else {
    array[i] = "I am ${i} strange loops.";
    return array;
  }
}
}
/******************
 * YOUR CODE HERE *
 ******************/
function slice(str,num1,num2){
  let slicer = '';
  for (let i = 0; i < str.length; i++){
   if (typeof num1 === 'undefined' && typeof num2 === 'undefined'){
    return str;
   }else if(typeof num2 === 'undefined'){
  return str.substring(num1, str.length); 
  } else if (i >= num1 && i < num2){
      slicer = slicer + str[i];
    }
}
return slicer;
}

function repeat(str,num){
  rePizzle = '';
  for (let i = 0; i < num; i ++){
    rePizzle = rePizzle + str;
  }
  return rePizzle
}


// Join and split need arrays 

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}

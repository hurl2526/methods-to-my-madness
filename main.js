/******************
 * YOUR CODE HERE *
 ******************/
function slice(str,num1,num2){
  let slicer = '';
  for (let i = 0; i < str.length; i++){
   if (num1 === undefined && num2 === undefined){
    return str;
   }else if(num2 === undefined && i >= num1 && i < str.length){
  slicer = slicer + str[i]; 
  } else if (i >= num1 && i < num2){
      slicer = slicer + str[i];
    }
}
return slicer;
}

function repeat(str,num){
  let rePizzle = '';
  for (let i = 0; i < num; i ++){
    rePizzle = rePizzle + str;
  }
  return rePizzle
}

function startsWith(str,letters){
  if (letters === slice(str,0,letters.length)) {
  return true;
  }else {
  return false;
  }
}

function endsWith(str,letters){
  if (letters === slice(str,str.length - letters.length,str.length)){
    return true;
  }else {
    return false;
  }
}

function includes (array, includesThis){
  for (let i = 0; i < array.length; i ++){
    if(array[i] === includesThis){
      return true;}
  }
  return false;
}

function join (array,parameter){
  let combinedString = '';
  for (let i = 0; i < array.length; i ++){
    if (typeof parameter === 'undefined'){
    combinedString = combinedString + array[i];
    }else if (i === array.length - 1){
      combinedString = combinedString + array[i];
    } else {
    combinedString = combinedString + array[i] + parameter;
  }
}  
  
  return combinedString;
}
  

function split(str, separator){
  let array = [];
  let string = '';
  for (let i = 0; i <= str.length; i ++){
  if (typeof separator === 'undefined'){
  array.push(str);
return array;
}
  if (str[i] === separator || i === str.length){
   array.push(string);
   string='';
}else {
  string = string + str[i];
}
}
return array;
}

function trimStart (str){
  let newString = '';
  let count = 0;
  for (let i = 0; i < str.length; i ++){
    if (str[0] !== ' '){
      return str;
    }
    if (str[i] !== ' ' || count){
      newString = newString + str[i];
      count = 1;
    }
  }

  return newString;
}

function trimEnd (str){
  const array = [];
  let count = str.length -1;
  for (let i = str.length -1; i >= 0; i --){
    if (str[str.length-1] !== ' '){
      return str;
    }
    if (str[str.length - 1] !== ' ' || count){
      array.push(str[i]);
      count = str.length - 2;
  }
}
  array.reverse();  

  return join(array);
}
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

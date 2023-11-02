
// //1.Do the below programs in anonymous function & IIFE
//Print odd numbers in an array

//a.print all odd number in anonymousfuction
var arr1=[1,2,3,4,5,6,7,8,9,10];
let odd_an=function(arr1){
    for( let i=0;i<arr1.length;i++){
   if( arr1[i]%2!==0){
    console.log(arr1[i])
    }
}
};
odd_an(arr1);
//   //a.print odd number in an IIEF
 ((arr1)=>{
      for( let i=0;i<arr1.length;i++){
   if( arr1[i]%2!=0){
    console.log(arr1[i]);
}
}
 })(arr1)
//  //c.Sum of all numbers in an array.anonymous function
var numbers=[11,12,13,14,15,16,17,18,19,20]
let result
let sum_an=function (num){
    let sum=0;
for(i=0;i<num.length;i++)
{
sum+=num[i];

}
console.log(sum)
}
sum_an(numbers);

// // //print sum all number in js use IIEF function
((num)=>{
    let sum=0;
for(i=0;i<num.length;i++)
{
sum+=num[i];
} console.log(sum);
})(numbers);
 

//  // return all prime number in an array anonymous function
var arr2=[11,12,13,14,15,16,17];
const prime_an=function (arr2){
    for(let i=0;i<arr2.length;i++){
        if(arr2%i===0)
            return false;
        }
        return arr2!==1;
    }
  
    const primeanonymous=arr2.filter(element=>prime_an(element));
    console.log(primeanonymous)
  //  return all prime number in array IIEF
((num)=>{
    for(let i=2;i<num;i++){
        if(num%i===0)
            return false;
        }
        num.filter
        return num!==1;
       
})(n);

 // Convert all the strings to title caps in a string array in anonymous fuction
 const str = "foo bar baz";
let ans1=function(str) {
    return str.split(' ').map(function(val){ 
      return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
    }).join(' ');
  }
let title=ans1(str);
 console.log(title);


 //Convert all the strings to title caps in a string array in iief fuction
(function strtolitle(str){
    return str.split(' ').map(function(val){ 
      return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
    }).join(' ');
  })(strtolitle(str));
  
 // "remove duplicate in array anonymous function")
let arr = ["apple", "mango", "apple","orange", "mango", "mango"];
let removeDuplicates=function (arr)  {
	return arr.filter((item,index) => arr.indexOf(item) === index);
}
let removearr=removeDuplicates(arr);
console.log(removearr);
//romove duplicate from an array iief function
( (arr)=> {
	return arr.filter((item,index) => (arr.indexOf(item) === index));
  })
  console.log(removeduplicates);
console.log();
//Return all the palindromes in an array anonymous function
const palindromes =function (el)  {
  const str = String(el);
  let i = 0;
  let j = str.length - 1;
  while(i < j) {
     if(str[i] === str[j]) {
        i++;
        j--;
     }
     else {
        return false;
     }
  }
  return true;
};
const palindromeanonymous = function (arr1)  {
  return arr1.filter(el => palindromes(el));
};
console.log(palindromeanonymous(arr1));
//'Return all the palindromes in an array iief function'

( (el1) => {
  const str = String(el);
  let i = 0;
  let j = str.length - 1;
  while(i < j) {
     if(str[i] === str[j]) {
        i++;
        j--;
     }
     else {
        return false;
     }
  }
  return true;
});
const palindromeanonymous1 = function (arr1)  {
  return arr1.filter(el1 => palindromes(el1));
};
console.log((palindromeanonymous(arr1)));
//Return median of two sorted arrays of the same size.
let sort_arr1=[1,2,3,4,5,6,7,8];
let sort_arr2=[9,10,11,12,13,14];
let new_arr=sort_arr1.sort(sort_arr2);
console.log(new_arr);



//2. arrow function
//print all odd number 
var allOddArr=(arr)=>{
  for( let i=0;i<arr.length;i++){
if( arr[i]%2!=0){
console.log(arr[i]);
}
}
}
console.log(allOddArr(array));
 //sum all array element 
const arrowsum=(num)=>{
  let sum=0;
for(i=0;i<num.length;i++)
{
sum+=num[i];
console.log(sum);
} 
};
// arrowsum(numbers);
// // Return all the prime numbers in an array 

// const n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// const isPrime = (num) => {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return num !== 1;
// };
// const myPrimeArray =n.filter(numb=>isPrime(numb));
// console.log(myPrimeArray);

// //   // convert all the string to title cap in string array in arrow function
// let ans=(str) =>{
//     return str.split(' ').map(function(val){ 
//       return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
//     }).join(' ');
//   }
//   let title1=ans(str);
//   console.log(title)
  
// //remove duplicate from an array 
// let removean=function (arr) {
// 	return arr.filter((item,index) => (arr.indexOf(item) === index));
//   }
// const  removeduplicates=removean(arr)
// console.log(removeduplicates);
  
//  //'Return all the palindromes in an array 
// const arr1 = ['carecar', 1344, 12321, 'did', 'cannot'];
// const isPalindrome = el => {
//    const str = String(el);
//    let i = 0;
//    let j = str.length - 1;
//    while(i < j) {
//       if(str[i] === str[j]) {
//          i++;
//          j--;
//       }
//       else {
//          return false;
//       }
//    }
//    return true;
// };
// const findPalindrome = arr1 => {
//    return arr1.filter(el => isPalindrome(el));
// };
// console.log(findPalindrome(arr1));
 

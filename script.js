
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
 

 // return all prime number in an array anonymous function
 let prime_array=function(numArray){
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0){ return false};
    }
    return true;
  });
  console.log(prime_array([1,2,3,4,5,6,7,8]));
}
  //  return all prime number in array IIEF
  (  
    function(numArray){
       numArray = numArray.filter((number) => {
         for (var i = 2; i <= Math.sqrt(number); i++) {
           if (number % i === 0) return false;
         }
         return true;
       });
       console.log(numArray);
   })([1,2,3,4])

 // Convert all the strings to title caps in a string array in anonymous fuction
 const str = ["foo bar baz"];
  let titlecase=function (str){
    var res=str.toString();
    var data1=res.toLowerCase().split(" ");
   for(var i=0;i<data1.length;i++){
    data1[i]=data1[i].charAt(0).toUpperCase()+data1[i].slice(1);

   }
    return data1.join(' ')
  }
  console.log(titlecase(str));


 //Convert all the strings to title caps in a string array in iief fuction

  (function (str){
    var res=str.toString();
    var data1=res.toLowerCase().split(" ");
   for(var i=0;i<data1.length;i++){
    data1[i]=data1[i].charAt(0).toUpperCase()+data1[i].slice(1);

   }
    console.log(data1.join(' ')) 
  })
  ((str));
  
 // "remove duplicate in array anonymous function")
let duplicate_arr = ["apple", "mango", 
          "apple", "orange", "mango", "mango"]; 
  
let removeDuplicates=function (arr) { 
    let a = []; 
    for (i = 0; i < arr.length; i++) { 
        if (a.indexOf(arr[i]) === -1) { 
            a.push(arr[i]); 
        } 
    } 
    return a; 
} 
console.log(removeDuplicates(duplicate_arr));
//romove duplicate from an array iief function
(function (arr) { 
  let a = []; 
  for (i = 0; i < arr.length; i++) { 
      if (a.indexOf(arr[i]) === -1) { 
          a.push(arr[i]); 
      } 
  } 
  console.log(a); 
} )
(duplicate_arr);
//Return all the palindromes in an array anonymous function
var arr=["mom","dad","data"]
let palindrome=function (arr){
var result=[];
for(i=0;i<arr.length;i++){
  var data=arr[i].split("").reverse().join("");
  if(data===arr[i]){
    result.push (arr[i])
  }
}
 return result 
}
console.log(palindrome(arr));
//'Return all the palindromes in an array iief function'
(function (arr){
  var result=[];
  for(i=0;i<arr.length;i++){
    var data=arr[i].split("").reverse().join("");
    if(data===arr[i]){
      result.push (arr[i])
    }
  }
  console.log(result)  
  })
 ((arr));
/*//Return median of two sorted arrays of the same size.
let sort_arr1=[1,2,3,4,5,6,7,8];
let sort_arr2=[9,10,11,12,13,14];
let new_arr=sort_arr1.sort(sort_arr2);
console.log(new_arr);*/



//2. arrow function
//print all odd number 
var allOdd_Arr=(arr)=>{
  for( let i=0;i<arr.length;i++){
if( arr[i]%2!==0){
console.log(arr[i]);
}
}
}
allOdd_Arr([1,2,3,4,5,6,7,8]);
 //sum all array element 
const arrow_sum=(num)=>{
  let sum=0;
for(i=0;i<num.length;i++)
{
sum+=num[i];

} 
console.log(sum);
};
arrow_sum(numbers);
// // Return all the prime numbers in an array 

const n=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray =n.filter(numb=>isPrime(numb));
console.log(myPrimeArray);

// //   // convert all the string to title cap in string array in arrow function
const str1 = ["foo bar baz"];
let titlecase_arrow= (str)=>{
  var res=str.toString();
  var data1=res.toLowerCase().split(" ");
 for(var i=0;i<data1.length;i++){
  data1[i]=data1[i].charAt(0).toUpperCase()+data1[i].slice(1);

 }
  return data1.join(' ')
}
console.log(titlecase_arrow(str));
  
// //remove duplicate from an array 
let duplicate_arr1 = ["apple", "mango", 
          "apple", "orange", "mango", "mango"]; 
  
let removeDuplicates_arrow=(arr)=> { 
    let a = []; 
    for (i = 0; i < arr.length; i++) { 
        if (a.indexOf(arr[i]) === -1) { 
            a.push(arr[i]); 
        } 
    } 
    return a; 
} 
console.log(removeDuplicates_arrow(duplicate_arr));
  
//  //'Return all the palindromes in an array 
var arr=["1221","dad","data"]
let arrow_palindrome= (arr)=>{
var result=[];
for(i=0;i<arr.length;i++){
  var data=arr[i].split("").reverse().join("");
  if(data===arr[i]){
    result.push (arr[i])
  }
}
 return result 
}
console.log(arrow_palindrome(arr));
 

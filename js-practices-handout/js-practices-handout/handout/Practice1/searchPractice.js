'use strict'
// const i = 0;
// const   mySreach = (Input , i , target)=> {
//    return i < Input.length ? (Input[i]==target ?  i : mySreach(Input , i+1 , target)) : -1 ;
//    }
// const search = (Input , target) =>  mySreach(Input , i , target);
function search(input, target) {
    var start = 0;
    var stop = input.length - 1;
     while (start <= stop){
     var mid = Math.floor((start + stop)/2);
     if (input[mid]== target) return mid;
      if (target < input[mid]) {
        stop = mid - 1 ;
      }
      else if (target > input[mid]) {
        start = mid + 1 ;
      }
      }
       return -1;
   }
module.exports = search

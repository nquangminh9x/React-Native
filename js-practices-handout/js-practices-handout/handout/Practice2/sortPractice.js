'use strict'

function sort(input) {
  var len = input.length;
 if (len<=1)return input;
 var pivot = input[Math.floor(len / 2)];
 var left =[];
 var right =[];
 var even =[];
 for(var i = 0 ; i< len ; i++){
   if (input[i]=== pivot)even.push(input[i]);       
   else if (input[i]<pivot)left.push(input[i]);      
  else if (input[i]>pivot)right.push(input[i]);      
  }
 return sort(left).concat(even , sort(right));
}
module.exports = sort

// module.exports = sort
// 'use strict'

// function sort(input) {
//   var k;
  
//   for (var i = 0 ; i< input.length - 1 ; i++){
//   for (var j = i ; j < input.length ; j++){
//     if (input[i]>=input[j]){
//       k = input[i];
//       input[i] = input[j];
//       input[j] = k;
//     }
//   }
//   }
//   return input;
// }
// module.exports = sort


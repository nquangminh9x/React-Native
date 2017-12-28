
'use strict'

 function sort(inputt) {
  var len = inputt.length;
 if (len<=1)return inputt;
 var pivot = inputt[Math.floor(len / 2)];
 var left =[];
 var right =[];
 var even =[];
 for(var i = 0 ; i< len ; i++)
    {
        if (inputt[i]=== pivot)even.push(inputt[i]);       
        else if (inputt[i]<pivot)left.push(inputt[i]);      
        else if (inputt[i]>pivot)right.push(inputt[i]);      
    }
 return sort(left).concat(even , sort(right));
}

function newData(eachTestCaseLength , numberOfTestCase , randomSpecialCases){
        var data ={
            "input"   :   [],
            "target"  :   0,
            "output"  :   -1,
        }
            var digitorpositive, flag=0;

        for (var i = 0 ; i< eachTestCaseLength ; i++)
        {
             Math.floor((Math.random()*2))==1 ? digitorpositive = 1 : digitorpositive = -1;
             if (flag==0)
             {
                data.input.push(Math.floor((Math.random()*10000))*digitorpositive);
                flag = 1;
                continue;
             }
              while(true)// vòng while này để chắc chắn việc sinh random các số trong input 
                {        // không được trùng với những số đã được sinh ra từ trước
                if (flag==1)
                    {   var thisflag = true;
                        var randomNumber = Math.floor((Math.random()*10000))*digitorpositive;
                        for (var j = 0 ; j< data.input.length ; j++)
                        {
                            if (data.input[i] == randomNumber) thisflag = false;
                        }
                        if (thisflag==false) continue;
                        else 
                        {
                          data.input.push(randomNumber);
                            break;
                        }
                    }
                }
        }

        data.input = sort(data.input);

        if (numberOfTestCase>=4)
        {
            switch (randomSpecialCases)
            {
                  case 0:
                          
                          while(true)
                            { // target là random và không thuộc input
                                var thisflag1 = true ;
                            Math.floor((Math.random()*2))==1 ? digitorpositive = 1 : digitorpositive = -1;
                              var myRandomTarget = Math.floor((Math.random()*10000))*digitorpositive;
                              for (var m = 0 ; m< eachTestCaseLength ; m++)
                                {
                                if (data.input[m]==myRandomTarget) thisflag1 = false; 
                                }
                                if (thisflag1 = false) continue;
                                else
                                {                                       
                                    data.target= myRandomTarget;
                                    break;  
                                }                          
                            }
                  data.output = -1;
                      break;
                  case 1:
                  data.target = data.input[0];
                  data.output = 0; // first index
                      break;
                  case 2:
                  data.target = data.input[eachTestCaseLength -1];
                  data.output = data.input.length - 1; // last index
                      break;
                  case 3: // middle
                  data.target= data.input[Math.floor(Math.random() * (eachTestCaseLength - 1)) +1 ];
                  data.output = data.input.indexOf(data.target);
                      break;
                  default:
                 data.target = data.input[Math.floor((Math.random() * 10000) + 1)];
                  data.output = data.input.indexOf(data.target);

            }
        }
        else 
        data.target = data.input.Math.floor((Math.random() * 10000) + 1);
        data.output = data.input.indexOf(data.target);
        return data;
}

function generate(testLengthArray){
    var flag0=false,flag1=false,flag2=false,flag3=false;
    var  result = [];
    var numOfTestCase = testLengthArray.length;
    if (numOfTestCase>=4)
    {
        while (true) // các trường hợp đặc biệt là ngẫu nhiên và phải đủ 4 trường hợp
        {
        for (var i = 0; i < numOfTestCase; i++) 
            {
            var flagofSpecialCase = Math.floor((Math.random()*8));
            if (flagofSpecialCase==0) flag0 = true;
            if (flagofSpecialCase==1) flag1 = true;
            if (flagofSpecialCase==2) flag2 = true;
            if (flagofSpecialCase==3) flag3 = true;
            result.push(newData(testLengthArray[i] , numOfTestCase ,flagofSpecialCase));
            }
            if (flag0==true && flag1 == true && flag2==true && flag3 == true ) break;
             else {
                 result =[];
                 continue;
             }
        }
    }
    else 
    if (numOfTestCase < 4) for (var i = 0; i < numOfTestCase; i++) 
    { 
        result.push(newData(testLengthArray[i] , numOfTestCase ,flagofSpecialCase));
    }
    return result;
}

module.exports = generate

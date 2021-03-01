 function func(){

    var sum = 0;
    var sum0 =0;
    var sum1 =0;
    for(i=3; i < 1000; i+=3){
        sum0 = sum0 + i;  
    }

    for(j=5; j < 1000; j+=5){
        sum1 = sum1 + j;   
    }
    sum = sum0 + sum1;
    return sum;
 }

 var a = func();
 console.log(a);
// write your code below

function multiply_By9(){
    var array = [0,1,2,3,4,5,6,7,8,9,10];
    array.forEach(function(item){
        console.log(9*item);
    })
}

multiply_By9();

function table(a){
    var result = 0;
   for(i=1 ; i <= 9 ; i++){
    result = a * i;
    console.log(`${a} * ${i} = ${result}`);
   }
}

table(5);
function fizzbuzz(){
    
    for(var i=1; i < 100; i++){

        if(i%15 == 0){
          console.log(`fizzbuzz for ${i}`);
        }
        if(i%3 == 0){
            console.log(`buzz for ${i}`);
        }
        else if(i%3 == 0){
            console.log(`fizz for ${i}`);
        }

        else
        console.log(i);
        
    }
}

fizzbuzz();


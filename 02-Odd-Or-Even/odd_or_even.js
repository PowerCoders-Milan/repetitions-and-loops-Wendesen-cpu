// odd or even reporter

// write a for loop to iterate from 0 to 20

  // check if the current is even or odd

  // report the result to the screen


  function evenOrNot(){

    for(i = 0; i <= 20; i++){
      if (i % 2 == 0){
        console.log(`${i} is even`)
      }
    }
  }



  function evenOrNot1(){
    var i = 0;
    while(i <= 20){
        if (i % 2 == 0){
          console.log(`${i} is even`)
                       }
          i++;
                  }
           
        }

        function evenOrNot2(){
          var i = 0;
                  do {
              if (i % 2 == 0){
                console.log(`${i} is even`)
                             }
                    i++;
                    } while (i <= 20)
                 
              }

evenOrNot();
evenOrNot1();
evenOrNot2();
        

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var num = 0;
var str = 0;
arr1.forEach(function(item){
    
    if(typeof(item) == "number"){
        num++
    }

    if(typeof(item)=="string"){
        str++
    }
    
})

console.log(`In the array, we ${num} number of numbers and ${str} number of strings.`)

function counter(a,b){
if(a>b){
    console.log(`we a lot number of character type numbers i.e. ${a}`)
}
else if(a<b){
    console.log(`we a lot number of character type strings i.e. ${b}`)
}

else {
    console.log(`We have same number of characters for both stings and numbers`)
}
}

counter(num,str);
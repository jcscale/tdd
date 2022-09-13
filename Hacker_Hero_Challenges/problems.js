function sum(num1, num2){
    return num1 + num2
}

function celciusToFahrenheit(cDegrees) {
    return (9/5*cDegrees)+32
}

function makeItBig(arr){
    // Enter code below
    for(var i = 0; arr.length>i; i++){
        if(arr[i]>0){
            arr[i] = "big"
        }
    }
    return arr
}

function double(arr){
    // Enter code below
    for(var i = 0; arr.length>i; i++){
        arr[i] = arr[i]*2
    }
    return arr
}

function returnArrayCountGreaterThanY(arr, y){
    // Enter code below
    var count = 0
    for(var i of arr){
        if(i>y){
            count+=1
        }
    }
    return count
}

function sigma(num){
    // Enter code below
    var sum = 0
    for(var i = 1; i<=num; i++){
        sum+=i
    }
    return sum
}

function factorial(num){
    // Enter code below
    var res = 1
    for(var i = 1; i<=num; i++){
        res*=i
    }
    return res
}

function swapTowardCenter(arr){
    // Enter code below
    var newarr = []
    for(var i = arr.length-1; i>=0; i--){
        newarr.push(arr[i])
    }
    return newarr
}

function threesFives(num){
    // Enter code below
    var sum = 0
    for(var i = 0; i<=num; i++){
        if (i%3!=0 && i%5!=0){
            sum+=i
        }
    }
    return sum
}

function fibonacci(index){
    // Enter code below
    var res = 0
    var first = 0
    var second = 1
    var count = 0

    if(index<1){
        return 0
    }
    else{
        
        while (count<index){ //2<3,  0, 1, 1, 2, 
            //console.log(first)
            res = first + second //res = 1 + 2 = 3, 
            first = second //1,
            second = res, //2
            
            count+=1 //2,
        
        }
    }
    return first
}
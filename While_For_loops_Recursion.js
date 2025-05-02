//1. Write a JavaScript function that will iterate from 0 to n. For each iteration,
function iterateAndLogWithFor(n) {
    for (var i=0;i<=n;i++) {
        if (i%2===0) {
            console.log(i+" is even")
        }
        if (i%2!==0) {
            console.log(i+" is odd")
        }        
    }
  }
  iterateAndLogWithFor(5)
function iterateAndLogWithwhile(n) {
    var i=0
    while (i<=n) {
        if (i%2===0) {
            console.log(i+" is even")
        }
        if (i%2!==0) {
            console.log(i+" is odd")
        }  
        i++      
    }
  }
  iterateAndLogWithwhile(5)
function reverseIterateAndLogRecursively(n) {
    if (n===0) {
        return n+" is even"
    }
    if (n%2===0) {
        console.log(n+" is even" )
        }
    else {
        console.log(n+" is odd")
    }
    return reverseIterateAndLogRecursively(n-1)
}
console.log(reverseIterateAndLogRecursively(5))
//3. Loop through the numbers 1 to n
function weirdDivisionWithFor(n) {
    for (i=1;i<=n;i++) {
        if(i%3===0&&i%5===0){
            console.log("JuliaJames")}
        if(i%3===0){
            console.log("Julia")}
        if(i%5===0){
            console.log("James")}
        if(i%3!==0&&i%5!==0){
            console.log(i)
        }
    } 
}
weirdDivisionWithFor(20)
function weirdDivisionWithWhile(n) {
    var i=1
    while (i<=n) {
        if(i%3===0&&i%5===0){
            console.log("JuliaJames")}
        if(i%3===0){
            console.log("Julia")}
        if(i%5===0){
            console.log("James")}
        if(i%3!==0&&i%5!==0){
            console.log(i)
        }
        i++
    } 
  }
  weirdDivisionWithFor(20)
function inverseWeirdDivisionRecursively(n) {
    if (n===0){
        return "1"
    } 
    if(n%3===0&&n%5===0){
        console.log("JuliaJames")}
    if(n%3===0){
        console.log("Julia")}
    if(n%5===0){
        console.log("James")}
    if(n%3!==0&&n%5!==0){
        console.log(n)
    }
    return inverseWeirdDivisionRecursively(n-1)
}
inverseWeirdDivisionRecursively(20)
//4. Write a function called laugh() that takes one parameter,num that represents the number of "ha"s to return.
function laughWithFor(number) {
    string=""
    for (var i=1;i<=number;i++){
        string=string+"ha"
    }
    return string
  }
console.log(laughWithFor(5))
  
function laughWithWhile(number) {
    string=""
    i=1
    while (i<=number){
        string=string+"ha"
        i++
    }
    return string
  }
console.log(laughWithFor(5))

function laughRecursively(number) {  
    if (number===1) return "ha"
    return "ha"+laughRecursively(number-1)
  }
console.log(laughRecursively(5))
//5. Create a function that calculates the sum of a number as follows:
function sumWithWhile(number) {
    var i=1
    var sum=0
    while(i<number){
        sum=sum+i
        i++
    }
    return sum
}
console.log(sumWithWhile(5))
function sumWithFor(number) {
     var sum=0
     for(i=1;i<number;i++){
        sum=sum+i
     }
     return sum
  }
console.log(sumWithFor(5))
// Create a function that calculates the factorial of a number
function factorialRecursively(number) {
    if (number===1) {
        return 1
    }
    return number*factorialRecursively(number-1)
  }
console.log(factorialRecursively(5))
// Write a JavaScript program to get the integers in range (x, y) and store then in an array
function rangeFor(min, max) {
    array=[]
    for(var i=min;i<max;i++) {
        array.push(i)
    }
    return array
  }
console.log(rangeFor(3,9))
function rangeWhile(min, max) {
    array=[]
    var i=min;
    while(i<max) {
        array.push(i)
        i++
    }
    return array
  }
console.log(rangeWhile(3,9))
//7.Write a function that takes a string and returns the same string reversed
function reverseWithWhile(str) {
    reverse=""
    var i=(str.length)-1
    while(i>=0) {
        reverse=reverse+str[i]
        i--
    }
    return reverse
  }
console.log(reverseWithWhile("abc"))
function reverseWithWhile(str) {
    reverse=""
    for (var i=(str.length)-1;i>=0;i--) {
        reverse=reverse+str[i]
    }
    return reverse
  }
  console.log(reverseWithWhile("abc"))
function reverseRecursively(str,i=str.length-1) {
    if (i===0) {
        return str[0]
    }
    return str[i]+reverseRecursively(str,i-1)
  }
console.log(reverseRecursively("abc"))
//8. You are given an integer. Return the sum of its digits.
function addDigits(num) {
    result=0
    new_num=num.toString()
    for(i=0;i<new_num.length;i++){
        result=result+parseInt(new_num[i])
    }
    return result
  }
  console.log(addDigits(29))
//9. Write a function called fib that accepts a number n as a parameter and computes the nth fibonacci number using the above rules.
function fibRecursive(number) {
    if (number===0||number===1) {
        return 1
    }
    return fibRecursive(number-1)+fibRecursive(number-2)
  }
console.log(fibRecursive(4))
//10. Write a function that returns the first digit in a string using a for/while loop
//  (digits may be anywhere in the string)
//  firstDigit('sdsa3dsad020a2'); => 3
//  firstDigit('tdhs020a2'); => 0
function firstDigitFor(str) {
    for (var i=0;i<str.length;i++){
        if(Number.isInteger(parseInt(str[i]))){
            return str[i]
        }
    }
    return "no digit found"
  }

function firstDigitWhile(str) {
     var i=0
     while (i<str.length){
        if(Number.isInteger(parseInt(str[i]))){
            return str[i]
        }
     i++
    }
    return "no digit found"
  }
console.log(firstDigitWhile("sdsa3dsad020a2"))
//11. Write a function remove that accepts an array and an element, and returns an
// array with all ocurrences of element removed.
// remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
function remove(array, element) {
    new_array=[]
    for(var i=0;i<array.length;i++){
        if(!(array[i]===element)){
            new_array.push(array[i])
        }
    }
    return new_array
}
console.log(remove([1, 3, 6, 2, 3], 3))
// 12. Write a function called average that takes an array of numbers as
// a parameter and returns the average of those numbers.
function average(arrOfNumbers) {
    s=0
    for(var i=0;i<arrOfNumbers.length;i++){
        s=s+arrOfNumbers[i]
     }
     return s/arrOfNumbers.length
}
console.log(average([1,2,3,4,5,6,7,8,9]))
// 13.Write a function that returns the maximum number in an array of numbers
// findMax([1, 6, 8, 20, 6, -1, 9]); => 20
// findMax([1, 6, 9, 0]); => 9
function findMax(arr) {
  var max=arr[0]
  for (var i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
  }
  return max
}
console.log(findMax([1,6,8,20,6,-1, 9]))
// 14. Check if all digits of the given integer are even
//  the function should return only true if all the digits are even
//  evenDigitsOnly("1253"); => false
//  evenDigitsOnly("62680"); => true
//  evenDigitsOnly("62680"); => true
//  NOTE: YOUR FUNCTION TAKES A STRING REPRESENTATION OF A NUMBER AND NOT THE NUMBER ITSELF
//  note that in the example, we called evenDigitsOnly("62680"), not evenDigitsOnly(62680)
function evenDigitsOnly(input) {
    s=0
    for(var i=0;i<input.length;i++){
        if(parseInt(input[i])%2!==0){
            s++
        }
    }
    if(s===0) return true
    else return false
  }
console.log(evenDigitsOnly("1253"))
// Create a function that checks if a string is a palindrome (google it)
// palindrome('aaba'); => false
// palindrome('kayak'); => true
// palindrome('2002'); => true
function palindrome(str) {
    new_str=""
    for(var i=str.length-1;i>=0;i--){
        new_str+=str[i]
    }
    if (new_str===str) return true
    else return false
  }
console.log(palindrome("kayak"))
// 16. Write a function that return the first duplicate element in a given array of numbers
// Example:
// firstDuplicate([2, 1, 6, 5, 1, 3, 0]); => 1
// firstDuplicate([2, 1, 2, 5, 1, 3, 0]); => 2
// firstDuplicate([2, 1, 6, 5, 8, 3, 0]); => "No duplicates"
function firstDuplicate(array) {
    for(var i=0;i<array.length;i++){
        for(j=i+1;j<array.length;j++){
            if(array[i]==array[j]) return array[i]
        }
    if(i===array.length-1) return "No duplicates"
  }
}
console.log(firstDuplicate([2, 1, 6, 5, 8, 3, 0]))
// /*****************************  17  ***********************/
// Theater seats often display a row and seat number to help theatergoers find their seats.
// If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for
// loop to print out all of the different seat combinations in the theater.
function findCombinations() {
    for (var i=0;i<26;i++){
        for (var j=0;i<100;j++) console.log("seat reference: row "+i+" seat :"+j)
    }
}
findCombinations()
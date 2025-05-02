//Basic Requirements
// 1.Fix the syntax & style issues with the three objects below:
var ob1={firstName:"Yan", lastname :"Fan" } 
var ob2={a: 1, b:2 ,c: 3, d :4} 
var ob3={ 
      animal: 'dog', 
      noise: 'bark', 
      age: 3, 
      type :'Golden Retriever' ,
      color: 'Yellow', 
}
//2. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.
var person={
    Firstname:"hazem",
    Lastname:"douzi",
    Hometown:"Djerba"
}
//3.Access the favorite food property in the object using dot notation, and reassign it to a different food.
person.food="mermez"
//4.Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively.
delete person.Firstname
delete person.Lastname
person.singleName={Firstname:"hazem",Lastname:"douzi"}
//5.Write a function called emptyObject that takes no parameters and returns an empty object.
function emptyObject(){  
   return {}
  }  
  emptyObject()
//6.Write a function called addProperty that takes two parameters, an object, and a key as a string. It then adds the key as a property in the object and gives it the value true.
function addProperty(object,x) {
    y=x.toString()  
    object[x]=true
    console.log(object)
    }  
var myObject={animal:'cat',food:'turkey',age:3}
//7 .Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌deleteProperty‌‌ ‌that‌ ‌takes‌ ‌two parameters an‌ ‌object‌ ‌and‌ a key as a string. It then removes the property with that key from the object.
function deleteProprty(object,key) {
    delete object[key]
    return object
}
var myObject={animal:"cats",food:"turkey",age:3}
console.log(deleteProprty(myObject,"food"))
//8.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addObjectProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌, ‌and‌ ‌a second ‌object. It then adds a new property with the passed key and the second object as its value.
function addObjectProperty(object1,key,object2) {
    value=object2
    object1.key=value
    return object1
}
var person1={name:"Ahmad",role:"worker"}
var person2={name:"Ranim",role:"Doctor"}
console.log(person1,"newjob",person2)
//9.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addFullNameProperty‌‌ ‌that‌ ‌takes‌ ‌an‌ ‌object‌ ‌as‌ ‌a‌ ‌parameter.‌ ‌If the object has both a firstName and a lastName property, then it adds a new property with the key fullName and the value as a string of the firstName and lastName combined with a space between them.
function addFullNameProperty(object) {
    result=object.firstName+" "+object.lastName
    object.fullName=result
    return object
    }
console.log(addFullNameProperty({firstName:"Leena", lastName:"Atia"}))
//10.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addArrayProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌ ‌and‌ ‌an‌ ‌array.‌ ‌It then adds a new property to the object with the specified key and its value is the array.
function addArrayProperty(object,key,array){
    object[key]=array
    return object   
}
var myObject={}
var myArray=[1,3]
console.log(myObject.myProperty)
addArrayProperty(myObject,"myProperty",myArray,)
console.log(myObject)
//11.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌printAllProperties‌‌ ‌that‌ takes ‌an‌ ‌object‌ ‌as a parameter. It then prints out to the console the values of all the object’s properties.
function printAllProperties(object){
    for(var i in object) {
        console.log("this is the key and his value",i,object[i])
    }
}
console.log(printAllProperties( {firstName:"Leena",  lastName:"Atia"}))
//More Practice
//1.Write a function called removeNumbersLargerThan that takes two parameters, a number and an object. It then removes all properties with values larger than the specified number.
function removeNumbersLargerThan(number,object) {
    for(var i in object) {
        if (object[i]>number) {
            delete object[i]
        }
    }
    return object
}
console.log(removeNumbersLargerThan(5,{a:8,b:2,c:"montana"}))
//2.Write a function called removeAllEvenValues that takes an object as a parameter. It then removes all properties with values that are an even number.
function removeAllEvenValues(object) {
    for(var i in object) {
        if (object[i]%2===0) {
            delete object[i]
        }
    }
    return object 
}
console.log(removeAllEvenValues({a:9,b:2,c:"montana"}))
//3.Write a function called removePropertiesNotEqualTo10 that takes an object as a parameter. It then removes all properties that are not equal to 10.
function removePropertiesNotEqualTo10(object) {
    for(var i in object) {
        if (object[i]!==10) {
            delete object[i]
        }
    }
    return object 
}
console.log(removePropertiesNotEqualTo10({a:10,b:2,c:"montana",d:10,e:"ohio",f:10}))
//4.Write a function called removeStringsLongerThan that takes two parameters, a number and an object. It then removes all strings with lengths larger than the number parameter.
function removeStringsLongerThan(object,number) {
    for(var i in object) {
        if ((object[i]).length>number) {
            delete object[i]
        }
    }
    return object 
}
console.log(removeStringsLongerThan({a:10,b:2,c:"montana",d:10,e:"ohio",f:10},3))
///5.Write a function called removeAllNumbers that takes an object as a parameter. It then removes all properties in the object that have number values.
function removeAllNumbers(object) {
    for(var i in object) {
    var condition=typeof object[i]
        if (condition==="number") {
            delete object[i]
        }
    }
    return object 
}
console.log(removeAllNumbers({a:10,b:2,c:"montana",d:10,e:"ohio",f:10}))
//6.Write a function called removeArrays that takes an object as a parameter. It then removes all properties that have array values.
function removeArrays(object) {
    for(var i in object) {
        if (Array.isArray(object[i])) {
            delete object[i]
        }
    }
    return object 
}
console.log(removeArrays({a:[1,2,3,4],b:2,c:"montana",d:10,e:"ohio",f:10}))
//7.Write a function called getFirstElementOfProperty that takes an object and a key and returns the first element in the array at the given key. If the array is empty it should return undefined. If the property at the given key is not an array it should return undefined. If there is no property at the key it should return undefined.
function getFirstElementOfProperty(object,key) {
    if ((object[key].length===0)||(Array.isArray(object[key])===false)||!(key in object)) {
        return undefined
    }
    return object[key][0]
}
console.log(getFirstElementOfProperty({a:[1,2,3,4],b:2,c:"montana"},"a"))
////8.Write a function called getNthElementOfProperty that takes three parameters, an object, a key and a number. It then returns the element located at the index equal to the number parameter from the array at the given key. If the array is empty it should return undefined. If the property at the given key is not an array it should return undefined. If there is no property at the key it should return undefined
function getNthElementOfProperty(object,key,number){
    if ((object[key].length===0)||(Array.isArray(object[key])===false)||!(key in object)) {
        return undefined
    }
    return object[key][number]
}
console.log(getNthElementOfProperty({a:[1,2,3,4]},"a",2))
//Advanced
//1.Write a function called isPropertyPresent that takes two parameters, an object and a key. It then returns true if there is a property at the given key and false otherwise.
function isPropertyPresent(object,key) {
    return (key in object)
} 
console.log(isPropertyPresent({a:1,b: 2},"c"))
//2.Write a function called getAllKeys that takes an object as a parameter and returns an array of keys of all the properties in the object.
function getAllKeys(object){
    for (var i in object){
        console.log("this is a key",i)
    }
}
getAllKeys({a:1,b:2,c:3})
//3.Write a function called getAllValues that takes an object as a parameter and returns an array of all the values from that object.
function getAllValues(object){
    for (var i in object){
        console.log("this is a value",object[i])
    }
}
getAllValues({a:1,b:2,c:3})
//4.Write a function called transformFirstAndLast that takes an array as a parameter and returns an object with one property where: The first element of the array is the key. The last element of the array is the value.
function transformFirstAndLast(array){
    object={}
    object[array[0].toString()]=array[array.length-1]
    return object
}
console.log(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']))
//5.Write a function called extend that takes two objects and adds all the properties of the second object to the first object if the property’s key does not already exist.
function extend(object1,object2) {
    for (var i in object1){
        if (!(i in object2)) {
            object2[i]=object1[i]
        }
    }
    return object2
}
console.log(extend({a:1,b:2},{c:5,b:4}))
//6.Write a function called countAllCharacters that takes a string as a parameter and returns an object with each unique character as a key and the value is the amount of times it appears in the string. If the string is empty it should return an empty object.
function countAllCharacters(string) {
    function count(character,string){
        s=0
        for(var i=0;i<string.length;i++){
            if (string[i]===character) {
                s=s+1
            }
        }
    return s 
    }
    object={}
    for(var i=0;i<string.length;i++){
        j=string[i]
        object[j]=count(j,string)
    }
    return object
}
console.log(countAllCharacters(""))
//7.Write a function called countWords that takes a string as a parameter and returns an object with each unique word as a key and the value is the amount of times it appears in the string If the string is empty it should return an empty object.
function countWords(string){
    function count2(word,string){
        array=string.split(" ")
        s=0
        for(var i=0;i<array.length;i++){
            if (array[i]===word) {
                s=s+1
            }
        }
    return s 
    }
    object={}
    array=string.split(" ")
    for(var i=0;i<array.length;i++){
        j=array[i]
        object[j]=count2(j,string)
    }
    return object
}
console.log(countWords("ask a bunch get a bunch"))
//8.Write a function called convertObjectToList that takes an object as a parameter and returns an array where each element is an array with the key as the first element and the value as the second.
function convertObjectToList(object){
    array=[]
    for (var j in object) {
        array.push([j,object[j]])
         }
    return array
    }
console.log(convertObjectToList({name:"holy",age:35,role:"producer"}))
//9.Write a function called select that takes two parameters, an object and an array. It then returns a new object with properties from the passed object whose keys were found in the array as elements.
function select(object,array){
    object2={}
    for(i=0;i<array.length;i++) {
        if (array[i] in object) {
            object2[array[i]]=object[array[i]]

        }
    }
    return object2
}
console.log(select({a:1,b:2,c:3,d:4},["a","b","e"]))
    

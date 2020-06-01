//Assignment-2 
//myEach take every element in an array
//then it invoke a callbacks to each element
//(parameter)goes to the {function()}

const mydata= [10, 15, 25, 30, 40];

console.log("foreach(): each element in array divided by 2");
const myEach = (nums, callback)=>{
  for(let i=0;i<nums.length; i++){
    callback(nums[i]);
  }
}
//callback condition
const dividedByTwo=(num)=>console.log(num/2);
myEach(mydata, dividedByTwo);


//myMap take every element in an array
//then it invoke a callbacks condition, square each given value,
//then send to new array "squareArray"
console.log("\nmap(): square of each element in array");
const myMap = (nums, callback)=>{
  const squareArray=[];
  for(let i=0;i<nums.length; i++){
    squareArray[i] = callback(nums[i]);
  }
  return squareArray;
}
//callback condition
//const square=(num)=> num*num;
const square=(num)=>{return num*num;}
console.log("mydata array: "+ mydata);
console.log(myMap(mydata,square));


//myFilter take every element in an array
//then it invoke a callbacks condition,check element in mrydata array bigger than 20 or not
//if have, send to new array "arrayfilter"
console.log("\nfilter():return an array that elements grate than 20 in mydata array");
const myFilter = (nums, callback)=>{
  const arrayfilter=[];
  for(let i=0;i<nums.length; i++){
    if (callback(nums[i])===1){
      arrayfilter.push( nums[i]);}
  }
  return arrayfilter;
} 
//callback condition
const filterNeed=(num)=>{
  if (num>20) {return 1;}
  else { return 0;}
}
console.log("mydata array: "+ mydata);
console.log(myFilter(mydata,filterNeed));


//mySome take every element in an array
//then it invoke a callbacks condition,check if any element match condition or not
//return boolean valre
console.log("\nsome(): check any element in mydata array is divided by 3 or not");
const mySome = (nums, callback)=>{
  for(let i=0;i<nums.length; i++){
    if (callback(nums[i])){
      return true;}
  }
  return false;
} 
//callback condition
const someNeed=(num)=>{
  if (num%3===0) {return true;}
  else {return false;}
}
console.log(mySome(mydata,someNeed));


//myEvery take every element in an array
//then it invoke a callbacks condition,check if all element match condition or not
//return boolean valre
console.log("\nevery(): check all elements in mydata array are even");
const myEvery = (nums, callback)=>{
  for(let i=0;i<nums.length; i++){
    if (callback(nums[i])===false){
      return false;}
  }
  return true;
} 
//callback condition
const everyNeed=(num)=>{
  if (num%2===0) {return true;}
  else {return false;}
}
console.log(myEvery(mydata,everyNeed));


//myReduce take every element in an array
//then it invoke a callbacks condition,merge all element to resulting one output value
console.log("\nreduce(): merge all element, resulte one output value");
const myReduce = (nums, callback)=>{
  let sum=0;
  for(let i=0;i<nums.length; i++){
    sum=callback(nums[i],sum);
  }
  return sum;
} 
//callback condition
const reduceNeed=(num1,num2)=>num1+num2;
console.log(myReduce(mydata,reduceNeed));

//myIncludes
//myEvery take every element in an array
//then it will check any element in array match target element
//return boolean valre
const pets = ['cat', 'dog', 'rabbit'];
const target='rat';
console.log("\nincludes(): check any element in array contain target element, return boolean");
const myIncludes = (word)=>{
  for(let i=0;i<word.length; i++){
    if(word[i]===target)
    return true;
  }
  return false;
}

console.log(myIncludes(pets));


//myIndexOf take every element in an array
//then it check any element in array match target element
//return array location, or -1 if it is not exist
console.log("\nindexOf(): check any element in array contain target element. If exist, return array location; otherwise return -1");
const targetNum = 18;
const myIndexOf = (nums)=>{
  for(let i=0;i<nums.length; i++){
    if(nums[i]===targetNum)
    return i;
  }
  return -1;
} 

console.log(myIndexOf(mydata));

//myPush take every element in an array
//then it add the element in elementToAdd array to mydata array
//return length of new array
console.log("\npush(): push the element in elementToAdd array add to mydata array, return length of new array");
const elementToAdd = [5, 2, 7, 9, 8];
const myPush =(nums)=>{
  const newArray=[];
  for(let i=0;i<(nums.length+elementToAdd.length); i++){
    if(i<nums.length)
    newArray[i] = nums[i];
    else
     newArray[i] = elementToAdd[i-nums.length];
  }
  return newArray.length;
}
console.log(myPush(mydata));

//myUnshift take every element in an array
//then it check the element in array to fine the last index of the target element will find in the array
//return array index, or -1 if target not in array
console.log("\nlastIndexOf(): check the element in array backwards, return last index of the target element");
const targatindex = 'a';
const myList = ['a', 'c', 'd','e', 'f', 'c','a', 'a', 'd'];

const myUnshift = (list,targatindex) =>{
  let temp =-1;
  for(let i=list.length-1;i>=0;i--){
    if(list[i]===targatindex && i>temp){
      temp = i;}
  }
  return temp;
}
console.log(myUnshift(myList, targatindex));

//Object.keys()
//
console.log("\nObject.keys(): get the keys of key:value pairs of that object");
const myItem = {name:'USB', price:12, amount:105}

Object.grabKeys = (object)=>{
  const keylist =[];
  for(const key in object){
    keylist.push(key);
    }
  return keylist;
}
console.log(Object.grabKeys(myItem));

console.log("\nObject.values(): get the values of key:value pairs of that object");
Object.grabValues = (object)=>{
  const values = [];
  for(const value in object){
    values.push(object[value]);
    }
  return values;
}
console.log(Object.grabValues(myItem));


/**ch4
●	Sum of a Range
●	Reversing an Array
●	A List
●	Deep Comparison 
*/
console.log("\n-------------------------\nSum of a Range");

const range=(num1, num2, step)=>{
  const arrayNum=[];
  let n = num1;
  if(step === undefined){
    let unstep=1;
    number=num1
    for(let i=0;i<num2;i++){
      arrayNum.push(number);
      number+=unstep;
    } 
  }
  else if(num1<num2 && step>0) {
    for(let i=0;i<100;i++){
      if (n>=num2){
        arrayNum.push(n);
        n=n+step;
      } 
      else 
        break;
      }
  }
  else if(num1>num2 && step<0) {

    for(let i=0;i<100;i++){
      if (n>=num2){
        arrayNum.push(n);
        n=n+step;
      } 
      else
        break;
      }
  }
  else {console.log("Error");}

  return arrayNum;
}

const sum=(array)=>{
    let sum=0;
    for(let i=0;i<array.length;i++){
      sum+=array[i];}
  return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

console.log("----------------------------\nReversing an Array");
const reverseArray=(array)=>{
	const reArray =[];
	for(let i=array.length-1;i>=0;i--){
		reArray.push(array[i]);
	}
    return reArray;
}

const reverseArrayInPlace=(array)=>{
  	const temp=[];
  	let num = array.length;
    let a = Math.ceil(array.length/2);  
    for(let i = 0; i < a; i++){
      if (num>=0){
      num=num-1;
      temp[i]=array[i];
      array[i]=array[num];
      array[num]=temp[i]
      }
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

console.log("------------------------\nA List");

const arrayToList = (array)=>{
  const list = {value: null, rest:null};
  list.value = array[0];
  array.shift() //
  if(array.length>0){ 
    list.rest=arrayToList(array);
  }
  else{
    list.rest = null;
  }
  return list;
}

const listToArray =(list)=>{
  const array = [];
  let li=list;
  while(li){//li still exist, keep runing
    array.push(li.value);
    li = li.rest;
    }
  return array;
}

const prepend =(v,r)=>{
  const list = {};
  list.value = v;
  list.rest = r;
  return list;
}

const nth =(list, num)=>{
  let position=0;
  for (let i = list; i; i = i.rest){
    if (position===num){
      return i.value;}
    else  position++;
  }
}

console.log(arrayToList([10, 20]));
console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


console.log("-----------------------\nDeep Comparison");

const deepEqual = (value1, value2 ) =>{
  if (value1===value2){
    return true;
  }
  else if(typeof value1 === typeof value2 && value1 !==null && value2 !==null)
  { // compare the content inside the values one by one,
    //any element not match will return false;
    //otherwsie return true;
    if (Object.keys(value1).length !== Object.keys(value2).length){
      return false;
    }
    for(const key in value1){
      if (value2.hasOwnProperty(key)){  
        //if value2 have same key as value1
        //Deep comparison of the value inside values are they equal each other, or not.
        //if not, return false
        if (deepEqual(value1[key], value2[key]) == false)
          return false;
      }
      else
      return false;//if value2 do not have same key as value1, return false
    }
    return true;
  }
  else 
    return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


console.log("-----------------------------\n");
console.log("Miscellaneous Problems (1)");
const myNums= [5, 2, 0, 9, 8, 0, 1, 0, 3, 12];

const moveZeros = (array)=> {
  let count=0;
  for(let i=0;i<array.length;i++){  
    if(array[i]!==0){
      array[count]=array[i];
      count+=1;
    }
  }
  for(let i=count;i<array.length;i++){
   array[count]=0;
   count+=1;
  }
  return array;
}
console.log(moveZeros(myNums));


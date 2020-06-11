// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
// a is a string, not a array. b is a array.

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i=0; i<a.length; i++){
   a[i] = a[i]*2;
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var str = colors.join(' ');
console.log(str);
str = colors.join('+');
console.log(str);
str = colors.join();
console.log(str);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var temp = a.sort(function(m,n){
 return n-m;
});
console.log(temp);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var tempJson = {};
a.forEach(function(key){
   if (key in tempJson){
       tempJson[key]++;
   }else{
       tempJson[key]= 1;
   }
})
var result;
var count = 0;
for(let key in tempJson){
   if (tempJson[key]>count){
       count = tempJson[key];
       result = key;
   }
}
console.log(result);

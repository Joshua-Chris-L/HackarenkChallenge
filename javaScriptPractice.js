
// const revString = (str) => {
//       const arr = str.split("")
//       arr.reverse();
//       str = arr.join("");
//       console.log(str)
// }

// revString("Gr45");

// const revString2 = (str) => {
//     let reversed = "";

//     for (let i = 0; i < str.length; i++) {
//         reversed = str[i] + reversed ; 
//         console.log(typeof(str[i]));
//     }

//    // console.log(reversed);
// }

// revString2("Greetings")

// // const array = ["5", "-2","4", "C", "D", "9", "+", "+"];

// const ops = ["5", "2", "C", "D", "+"]

// function callPoints (array){
//     let arrayCleaned = [];
//     let array5 = []

//     for (let i = 0; i < array.length; i++) { 
//         if (isNaN(array[i])){
//             arrayCleaned.push(array[i])
//         }else{
//             arrayCleaned.push(array[i]*1)
//         }
//     }
    
//     for (let i = 0; i < arrayCleaned.length; i++) {
//         if(!isNaN(arrayCleaned[i])){
//             array5.push(arrayCleaned[i])
//         }else if(arrayCleaned[i] === "C"){
//             array5.pop(i-1)
//         }else if (arrayCleaned[i] === "D"){
//             array5.push((array5[array5.length-1])*2)   
//         }else if (arrayCleaned[i] === "+"){
//             array5.push(array5[array5.length -1] + array5[array5.length - 2])
//         } 
//     }

//     const sum = array5.reduce((accumulator, value) => {
//         return accumulator + value
//     }, 0)

    
//     console.log(arrayCleaned)
//     console.log(array5);
//     console.log(sum);

// }

// callPoints(ops)

// function pallindrone(input){
//     let reverse = "";
//     for (let i = 0; i< input.length; i++) {
//         reverse = input[i] + reverse      
//     }

//     if (input === reverse) {
//         console.log("true")
//     }else {
//         console.log("false")
//     }
//     console.log(reverse)
// }

// pallindrone("abba")
 

// Find the character that appears the most and the total number of times it appears

// const maxChar = (str) => {
//         let obj = { };

        // for(let char in str){
        //     if (!obj[char]) {
        //         obj[char] =1
        //     } else {
        //         obj[char]++;
        //     }
        // }

//         for (let i = 0; i < str.length; i++) {
//            if(!obj[str[i]]){
//                 obj[str[i]] = 1
//            }else{
//                obj[str[i]]++
//            }     
//         }

//         let maxNum = 0;
//         let maxChar = "";
//         for(let i in obj){
//             if(obj[i] > maxNum){
//                 maxNum = obj[i]
//                 maxChar = i
//             }
//         }
            
//         console.log(obj, maxNum, maxChar)
// }

// maxChar("abjrbbb");

// convert an integer to string
// const intToString = (num) => {
//     let reverseNum = parseInt(num.toString().split('').reverse().join('')) 
//     console.log(reverseNum);
// }

// intToString(513)


// Chunked Array
// const chukedArray = ((arr, n) => {
//     let chunked = []

//     for(let elem of arr){
//         let last = chunked[chunked.length - 1]

//         if (!last || last.length === parseInt(n) ){
//             chunked.push([elem])
//         }else{
//             last.push(elem)
//         }
//     }

//     return chunked
// })([1,4,12,3,2,6,-9,0], 3)


// console.log({
//     chukedArray
// })

// const chunkArraySol2 = ((arrayChu, n) => {
//     let chunk = [];
//     for (let i = 0; i < arrayChu.length; i += n) {
//          chunk.push( arrayChu.slice(i, i + n) ) 
//     }
//     return chunk
// })([1,6,7,8,4,4,6,7,8,9,6,8,9], 3)

// console.log({
//     chunkArraySol2
// })

// const uniqueString = ((str) => {
//    obj = {}
//    for (let i = 0; i < str.length; i++) {
//         if (!obj[str[i]] ) {
//             obj[str[i]] = 1
//         }else {
//             obj[str[i]]++
//         }    
//    }

//    let val = 0
//    for(let char in obj){
//         if (val < obj[char]) {
//             val = obj[char]
//         }
//     }
//     if (val > 1) {
//         return ("String is not unique")
//     }else{
//         return ("String is Unique")
//     }
// })("petra")

// console.log({
//     uniqueString
// })

// const whiteSpace = ((str) => {
//     let newString = ""
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             newString += "%20"
//         }else {
//             newString += str[i]
//         }   
//     }
//     return newString;
// }) ("Abiola la i  m");

// console.log({
//     whiteSpace
// })

// const palindrone = (str) => {
//     let joinStr = str.replace(/ +/g,"");
//     let obj = {}

//     for (let i = 0; i < joinStr.length; i++) {
//         if (!obj[joinStr[i]]) {
//             obj[joinStr[i]] = 1
//         }else {
//             obj[joinStr[i]]++
//         }
//     }
//     count = 0;

//     for (const key in obj) {
//        if (obj[key] %2 === 0) {
//            continue
//        }else{
//            count++
//        }
//     }
//     if (count > 1) {
//         console.log("The string is not a palindrone")
//     }else{
//         console.log("The string is a palindrone")
//     }
// }

// palindrone("taco cat")
// palindrone('atco cat')
// palindrone(' rac ecar rara ')
// palindrone('chirpingmermaid')
// palindrone('aabc')

// const oneWay = (str_I, str_J )=> {

//         let str_1 = str_I.split("")
//         let str_2 = str_J.split("") 
//         let new_Str = []

//         for (let i = 0; i < str_1.length; i++) {
//            if (str_1[i] === str_2[i]) {
//                new_Str.push(str_1[i])
//            }else if (str_1[i] !== str_2[i] || str_2 === ""){
//                new_Str.push(str_1[i])
//            }else{
//                new_Str.push(str_1[i])
//            }
//         }
//         console.log(new_Str)

        // let  dict_I = {}
        // let dict_J = {}

        // for (let i in str_I) {
        //     dict_I[str_I[i]] = str_I[i]
        // }

        // for (let i in str_J) {
        //     dict_J[str_J[i]] = str_J[i]
        // }
        
        // let newDict = {}

        // console.log(dict_I)
        // console.log(dict_J) 
    //   for (const key in dict_I) {
    //      console.log(key)
    //   }
// }

// oneWay("pales", "ple")
// oneWay("pale", "pales")
// oneWay("pale", "bake")
// oneWay()

// const strinComp = (str) => {
//         let str_Array = str.split("")

//         let count = 2
//         let array = []

//         for (let i = 0; i < str_Array.length; i++) {

//             if (str_Array[i] === str_Array[i+1]) {
//                 array.push(str_Array[i] + count)
//             }else {
//                 array.push(str_Array[i] + count)
//             }
//       }
//       console.log(array)
// }

// strinComp("loov")

// const matrix = [[4,1,3], [2,-4,1], [5,9,0]];

// const zeroMatrix = (matrix) => {
//       for (let col = 0; col < matrix.length; col++) {
//             for (let row = 0; row < matrix.length; row++) {
//                 if (matrix[col][row] === 0) {
//                     matrix[col][row] = true
//                 }
//             }
          
//       }
//       for (let row = 0; row < matrix.length; row++) {
//           for (let col = 0; col < matrix.length; col++) {
//             if (matrix[row][col] === true) {
//                 for (let i = 0; i < matrix.length; i++) {
//                   matrix[row][i] = 0
//                   matrix[i][col] = 0                    
//                 }
//             }
              
//           }
          
//       }
//       console.log(matrix)
// }

// zeroMatrix(matrix);


// let bill = 275
// let tip;
// bill <= 300 && bill >= 50 ? tip = 0.15*bill : tip = 0.2*bill 
// console.log(`The bill values was ${bill}, the tip was ${tip} and total
// value ${bill + tip}`)

// let a  = []

// a.push(1, 5)

// console.log(a)

// function compareTriplets(a, b){
//         let alicePoint = 0
//         let bobPoint = 0
//         let ab = []


//         for (let i = 0; i < a.length; i++) {
                
//                 if (a[i] > 100) {
//                         return ("the number must be between 1 and 100")
//                 }
//                if (a[i] > b[i]) {
//                        ++alicePoint
//                }else if (a[i] < b[i]){
//                        ++bobPoint
//                } 
//         }
//         ab.push(alicePoint, bobPoint);
//         // for (const i of a) {
//         //         if (a[i] > b[i]) {
//         //                 alicePoint += 1
//         //         }else if (a[i] < b[i]){
//         //                 bobPoint += 1       
//         //         }
//         // }

//         console.log(ab)
// }

// compareTriplets([500,6,7], [3,6,10])


// function mainDiagonals(arr){

//         let n = arr.length
//         console.log(n)
//         let rightDiagonal = [];
//         let leftDiagonal  = [];

//         for (let i = 0; i < arr.length; i++) {

//                for (let j = 0; j < arr.length; j++) {
                       
//                         if (i === j) {
//                                 leftDiagonal.push(arr[i][j]) 
//                         }

//                         if ( (i+j) === (n - 1)) {
//                                 rightDiagonal.push(arr[i][j]) 
//                         }
//                }
                
//         }

//         console.log(rightDiagonal, leftDiagonal);
// }

// mainDiagonals(
//         ([[2, 4,  5], 
//           [7, 8, 10],
//           [9, 6, 15]]), 3)


// let ar = [3,5,6,7,7]

// let b = ar.filter(x => x===Math.max(...ar)).length
// console.log(b)

// let arMax = Math.max(...ar)
// let num = 0;

// for(let char in str){
//         //     if (!obj[char]) {
//         //         obj[char] =1
//         //     } else {
//         //         obj[char]++;
//         //     }
//         // }

// let obj = {}
// for (const i of ar) {
//         if(!obj[i]){
//                 obj[i] = 1
//         }else{
//                 ++obj[i]
//         }
// }

// console.log(obj)

// let ar = [3,5,6,7,7]
// let max = Math.max(...ar)

// let num = 0;
// for (const i of ar) {
//         if (max === i) {
//             num += 1
//         }
// }

// console.log(num)


// function minPosi(arr){

//         let positiveNum = 0, negativeNum = 0, zeroNum = 0
//         const n = arr.length

//         for (const i of arr) {
//                 if (i < 0) {
//                         ++negativeNum 
//                 }else if(i > 0){
//                         ++positiveNum
//                 }else{
//                         ++zeroNum
//                 }
//         }

//         console.log( (positiveNum/n).toFixed(6) + "\n" + negativeNum + "\n" + zeroNum)
// }
 
// minPosi([-1, -2, 3, 0, 1,2,-3])



// function stairCase(n){
//      let p = '#'
//      let a = " "
//      for (let i = 0; i < n; i++) {
//              let len_ash = p.repeat(i+1)
//              let len_space = a.repeat(n-i)
//              console.log(len_space + len_ash)
//      }
      
// }

// stairCase(5)




// const jonas = {
//         year : 1991,
//         calAge : function () {
//           console.log(this)

//           const isMillenial = function (){
//               console.log(this.year >= 1981 && this.year <= 1996);
//           }
//           isMillenial();

//         }

        
// }

// jonas.calAge();

// const matilda = {
//         year : 2017,
// };

// matilda.calAge = jonas.calAge

// const nested = [2,4, [5, 6]]

// const [i, , [j, k]] = nested
// console.log(i, j, k)

// let obj = {
//        openingHours : {
//                mon: {
//                    open: 10,
//                    close: 56
//                },
//                tue: {
//                    open: 8,
//                    close: 10
//                },
//                wed: {
//                   open: 8,
//                   close: 12
//                }
//        }
//}

//const {mon, ...opening } = obj.openingHours
//console.log(opening)

// const {
//      openingHours:{mon: {open, close}}
//     } = obj

// //const {mon} = openingHours;
// console.log(open)


// const [a, b, c, ...others] = [1, 2, 3,5,7,8]
// console.log(a, b, c, ...others)

// const { openingHours: {mon}} = obj 
// const {open, close} = mon

// const[openData] = {...open}
// console.log(...open)

// const arr = [2,6,61,7,8,9,10,23,45,78] 
// const [a, b, ...others] = arr

//const [first, second, ...other] = open
//console.log(first, second, ...other);

// const { mon, ...mone} = obj.openingHours

// console.log(mone)

// let numbers = 2016;

const objAdd = {
        
        addAll : function(...num){
                // let allNumbers = [...year]
                let sum = 0
                for (let i = 0; i < num.length; i++) {
                        sum += num[i]
                }

                console.log(sum)
        },
        
        //ES6 Syntax
        addAll(...num){
                // let allNumbers = [...year]
                let sum = 0
                for (let i = 0; i < num.length; i++) {
                        sum += num[i]
                }

                console.log(sum)
        },


 }
// // numbers = [1,4,4,2]
//objAdd.addAll( 2,0,2,3,3, 9,90)

// let num = [1,3,4,4,4]

// console.log(...num)

// const ngozi = ['ALiyu', 'Tunde', 'Joshua']
// const(ngozi[0], ...ngozi) = tunde

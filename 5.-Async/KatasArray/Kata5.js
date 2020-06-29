
const palindrome =(array) =>{
    array = array.toLowerCase().replace(/ /g,"").split("").join("");
    let array2 = array.split("").reverse().join("");
    return array == array2?true:false;
}
   
let array = 'Anula la Luna';

console.log(palindrome(array));

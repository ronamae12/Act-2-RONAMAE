let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log("Concatenated array:", combinedArr);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("After push (add 'Kiwi'):", fruits);

let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("After unshift (add 4 and 5):", array1);

fruits.pop();
console.log("After pop (remove last element):", fruits);

let array2 = [1, 2, 3];
array2.shift();
console.log("After shift (remove first element):", array2);

fruits.sort();
console.log("After sort (alphabetical order):", fruits);

let slicedFruits = fruits.slice(1, 3);
console.log("Sliced portion of fruits array:", slicedFruits);

let months = ["January", "March", "April", "June"];
months.splice(1, 0, "February");
console.log("After splice (insert 'February'):", months);
months.splice(4, 1, "May");
console.log("After splice (remove 'June' and add 'May'):", months);
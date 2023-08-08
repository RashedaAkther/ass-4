function cubeNumber(inputNumber) {
  if (typeof inputNumber !== "number") {
    return " Please provide me a number";
  } else {
    let result = Math.pow(inputNumber, 3);
    return result;
  }
}
// const inputNumber = "Rasheda";
// console.log(cubeNumber(inputNumber));
// const inputNumber = 3;
// console.log(cubeNumber(inputNumber));


function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
      return "Invalid Input";
    } else if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
}

// console.log(matchFinder("jhone", "hone"));




function sortMaker(array) {
     const [a, b] = array;
    if (!Array.isArray(array) || array.length !== 2) {
        return "Invalid Input";
    }
    
    else if (typeof a !== "number" || typeof b !== "number") {
        return "Invalid Input";
    }
     else if(a === b) {
        return "equal";
    }
    else {
        return [Math.min(a, b), Math.max(a, b)];
    }
}

// console.log(sortMaker([2, 3]));
// console.log(sortMaker([4, 2]));
// console.log(sortMaker([4, 4]));
// console.log(sortMaker([1, 2]));
// console.log(sortMaker([4, -2]));



function findAddress(propertyInput) {
    if (typeof propertyInput !== "object") {
        return "Please provide me a valid object"
    }
    else {
        const street = propertyInput.street || "__";
        const house = propertyInput.house || "__";
        const society = propertyInput.society || "__";

         return "street+","+house+","+society";
    }
    
}

const obj = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
};
console.log(findAddress(obj));


function canPay(items, price) {
   if (items.length !== Number ) {
     return "invalid input";
   }
    else if (items.length === 0) {
    return false; 
  }
  else {
    let totalMoney = items.reduce((sum, item) => sum + item, 0);

    return totalMoney >= price;  
}
  
}

console.log(canPay([1, 2, 5], 10));

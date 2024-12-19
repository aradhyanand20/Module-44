
function numberChecker(arr){
    return function(num){
        return arr.includes(num);
    }
}

let numCheck = numberChecker([4,3,78,54,3]);
console.log(numCheck(5));
console.log(numCheck(3));


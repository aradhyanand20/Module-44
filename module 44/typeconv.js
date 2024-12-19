function convertToNumber(str){
    let num = Number(str);
    try{
    if(isNaN(num)){
        throw new Error("Invalid number");
    }
    return num;
     }
    catch(error){
      return error.message;
    }
}

console.log(convertToNumber('456'));
console.log(convertToNumber('car'));


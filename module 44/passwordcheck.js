// Create a class called User with properties username and password. Implement a getter method for password
// that returns the password with all characters replaced by asterisks. Implement a setter method for password
// that checks if the new password is at least 8 characters long and contains at least one number and one
// uppercase letter. If the password is valid, set the new password. If not, log an error message.

class User{
    constructor(username,password){
        this.name = username;
        this.passcode = password;
    }
    get password(){
        return '*'.repeat(this.passcode.length);
    }

    set password(newpassword){
        const upperCase = /[A-Z]/.test(newpassword);
        const number = /\d/.test(newpassword);
        const validLength = newpassword.length >=8;

        if( upperCase && number && validLength){
            this.passcode = newpassword;
            console.log("valid password");
            
        }
        else{
            console.log("Error, doesn't meet the requirement");
            
        }

    }
}

const user =  new User("Aradhya", "passWo22");
console.log(user.password);

user.password = "nEw123456432";
console.log(user.password);

user.password = "nEw32";
console.log(user.password);
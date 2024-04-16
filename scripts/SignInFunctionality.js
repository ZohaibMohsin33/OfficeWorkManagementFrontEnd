function signInFunctionality(){
    event.preventDefault();
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let email = document.getElementById("signInEmail").value;
    console.log(email);
    if(!email.match(regex)){
        alert ("Kindly enter a proper email");
        return false;
    }

    let password = document.getElementById("signInPassword").value;
    console.log(password);
    let minNumberofChars = 6;
    let maxNumberofChars = 16;
    let regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(password.length < minNumberofChars || password.length > maxNumberofChars){
        alert("Enter correct number of password");
        return false;
    }
    if(!regularExpression.test(password)) {
        alert("password should contain atleast one number and one special character");
        return false;
    }

    
}
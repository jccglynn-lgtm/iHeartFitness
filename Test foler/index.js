   //==========================
   //BMI calculator on java script
   //==========================
function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    if (!weight || !height || height <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }
    let bmi = weight / (height * height);

    document.getElementById("bmiResult").innerText = bmi.toFixed(2);

    if (bmi > 29.9) {
        alert("You are obese. It's advisable to seek guidance from a healthcare professional for a comprehensive health plan.");
    }
}
    //==========================    
    // Signup function
    //==========================
function signup(){
let email = document.getElementById("email").value;
let password = document.getElementById("psw").value;
let repeatPassword = document.getElementById("psw-repeat").value;
if(!email || !password || !repeatPassword){
    alert("Please fill in all fields.");
    return;
}
if(password !== repeatPassword){
    alert("Passwords do not match.");
    return;
}
localStorage.setItem("email", email);
localStorage.setItem("password", password);
alert("Registration successful! Please log in.");
window.location.href = "login.html";
    }
    //==========================
    // Login function
    //==========================
function login(){
let email = document.getElementById("mail").value;
let password = document.getElementById("pw").value;
let storedEmail = localStorage.getItem("email");
let storedPassword = localStorage.getItem("password");
if(email === storedEmail && password === storedPassword)
{
    alert("Login successful!");
    window.location.href = "accountpage.html";  
}
else{
    alert("Invalid email or password.");
    return;
}
}
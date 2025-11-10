   //BMI calculator on java script
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
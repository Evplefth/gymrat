// scripts.js

// BMI Calculator functionality
document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const weight = parseFloat(document.getElementById('weightInput').value);
    const heightCm = parseFloat(document.getElementById('heightInput').value);
    
    if(isNaN(weight) || isNaN(heightCm) || heightCm <= 0) {
      document.getElementById('bmiResult').textContent = 'Please enter valid weight and height.';
      return;
    }
    
    const height = heightCm / 100; // convert cm to meters
    const bmi = weight / (height * height);
    
    let bmiCategory = '';
    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmi < 25) {
      bmiCategory = 'Normal weight';
    } else if (bmi < 30) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obese';
    }
    
    document.getElementById('bmiResult').textContent = `Your BMI is ${bmi.toFixed(1)} (${bmiCategory})`;
  });
  
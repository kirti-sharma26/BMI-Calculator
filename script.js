function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    if (height > 0 && weight > 0) {
        var bmi = (weight / ((height/100) ** 2)).toFixed(2);
        var category = getBMICategory(bmi);

        document.getElementById("result").innerHTML = `Your BMI is: ${bmi} (${category})`;

        // Update the meter value and color
        var bmiMeter = document.getElementById("bmiMeter");
        bmiMeter.value = bmi;
        updateMeterColor(bmiMeter, bmi);
    } else {
        alert("Please enter valid height and weight values.");
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function updateMeterColor(meter, bmi) {
    if (bmi < 18.5) {
        meter.style.backgroundColor = "red";
    } else if (bmi >= 18.5 && bmi < 25) {
        meter.style.backgroundColor = "green";
    } else if (bmi >= 25 && bmi < 30) {
        meter.style.backgroundColor = "orange";
    } else {
        meter.style.backgroundColor = "red";
    }
}


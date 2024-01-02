function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function convertTemperature() {
    var input = parseFloat(document.getElementById("temperature").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    if (isNaN(input)) {
        alert("Invalid input, please enter a number.");
        return;
    }

    var convertedTemperature;
    if (fromUnit === "F") {
        convertedTemperature = toCelsius(input);
    } else if (fromUnit === "C") {
        convertedTemperature = toFahrenheit(input);
    } else {
        // Assume input is in Kelvin
        convertedTemperature = (fromUnit === "K") ? input - 273.15 : input;
    }

    if (toUnit === "F") {
        convertedTemperature = toFahrenheit(convertedTemperature);
    } else if (toUnit === "C") {
        convertedTemperature = toCelsius(convertedTemperature);
    } else {
        // Convert to Kelvin
        convertedTemperature = convertedTemperature + 273.15;
    }

    document.getElementById("result").textContent = "Converted temperature: " + convertedTemperature.toFixed(2) + " " + toUnit;
}

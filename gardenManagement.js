const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// Check if the temperature is above 80 degrees
if (temperature > 80)
    console.log("Watering on");
else
    console.log("Watering off");

// Check time of day to control lights
if (timeOfDay == "evening" || timeOfDay == "night")
    console.log("Lights on");
else
    console.log("Lights off");

// While loop to control soil moisture
while (soilMoisture < 40) {
    soilMoisture += 5;  
}

// Output the final soil moisture level
console.log(soilMoisture);
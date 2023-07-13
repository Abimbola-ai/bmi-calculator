var height;
var weight;
var bmi;

height = document.getElementById("height");

weight = document.getElementById("weight");


document.write(bmi.toFixed(1));

function getBmi(weight, height){
    var bmi =  weight / (height * height);
    return bmi;
}
function Car(manufacturer, model, year, averageSpeed) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.year = year;
  this.averageSpeed = averageSpeed;
}
Car.prototype.displayInfo = function() {
  console.log("Производитель: " + this.manufacturer);
  console.log("Модель: " + this.model);
  console.log("Год выпуска: " + this.year);
  console.log("Средняя скорость: " + this.averageSpeed);
};
var car1 = new Car("Toyota", "Camry", 2023, 120);
car1.displayInfo();

function calculateTravelTime(speed, distance) {
  const hours = distance / speed;
  const pauses = Math.floor(hours / 4);
  const travelTime = hours + pauses;
  return travelTime;
}

var travelTime = calculateTravelTime(60, 300);
console.log("Необходимое время для преодоления расстояния: " + travelTime + " часов");


console.log(`--------------`)

function Fraction(numerator, denominator) {
  this.numerator = numerator;
  this.denominator = denominator;
}
Fraction.prototype.add = function(fraction) {
  var commonDenominator = this.denominator * fraction.denominator;
  var newNumerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
  return new Fraction(newNumerator, commonDenominator);
}
var fraction1 = new Fraction(1, 4);
var fraction2 = new Fraction(3, 4);
var sum = fraction1.add(fraction2);
console.log("Сумма дробей: " + sum.numerator + "/" + sum.denominator);



function subtractFractions(fraction1, fraction2) {
  var commonDenominator = fraction1.denominator * fraction2.denominator;
  var newNumerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
  return new Fraction(newNumerator, commonDenominator);
}
var fraction1 = new Fraction(3, 4);
var fraction2 = new Fraction(1, 4);
var difference = subtractFractions(fraction1, fraction2);
console.log("Разница дробей: " + difference.numerator + "/" + difference.denominator);



function multiplyFractions(fraction1, fraction2) {
  var newNumerator = fraction1.numerator * fraction2.numerator;
  var newDenominator = fraction1.denominator * fraction2.denominator;
  return new Fraction(newNumerator, newDenominator);
}
var fraction1 = new Fraction(1, 2);
var fraction2 = new Fraction(3, 4);
var product = multiplyFractions(fraction1, fraction2);
console.log("Умножение дробей: " + product.numerator + "/" + product.denominator);



function divideFractions(fraction1, fraction2) {
  var newNumerator = fraction1.numerator * fraction2.denominator;
  var newDenominator = fraction1.denominator * fraction2.numerator;
  return new Fraction(newNumerator, newDenominator);
}
var fraction1 = new Fraction(3, 4);
var fraction2 = new Fraction(1, 2);
var quotient = divideFractions(fraction1, fraction2);
console.log("Диление дробей: " + quotient.numerator + "/" + quotient.denominator);



function simplifyFraction(fraction) {
  var gcd = greatestCommonDivisor(fraction.numerator, fraction.denominator);
  var newNumerator = fraction.numerator / gcd;
  var newDenominator = fraction.denominator / gcd;
  return new Fraction(newNumerator, newDenominator);
}
function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  } else {
    return greatestCommonDivisor(b, a % b);
  }
}
var fraction = new Fraction(4, 6);
var simplifiedFraction = simplifyFraction(fraction);
console.log("Сокращенная дробей: " + simplifiedFraction.numerator + "/" + simplifiedFraction.denominator);

console.log(`--------------`)


function displayTime(hours, minutes, seconds) {
  var formattedHours = hours;
  var formattedMinutes = minutes;
  var formattedSeconds = seconds;
  console.log("Час: " + formattedHours + ":" + formattedMinutes + ":" + formattedSeconds);
}

function addSeconds(hours, minutes, seconds) {
  var totalSeconds = hours * 3600 + minutes * 60 + seconds;
  totalSeconds += seconds;
  hours = Math.floor(totalSeconds / 3600) % 24;
  minutes = Math.floor((totalSeconds % 3600) / 60);
  seconds = totalSeconds % 60;
  return [hours, minutes, seconds];
}

function addMinutes(hours, minutes, addedMinutes) {
  var totalMinutes = hours * 60 + minutes;
  totalMinutes += addedMinutes;
  hours = Math.floor(totalMinutes / 60) % 24;
  minutes = totalMinutes % 60;
  return [hours, minutes];
}

function addHours(hours, addedHours) {
  hours = (hours + addedHours) % 24;
  return hours;
}

console.log("Начальное время:");
displayTime(20, 30, 45);

console.log("Измененное время (секунды):");
var [newHours, newMinutes, newSeconds] = addSeconds(20, 30, 45, 30);
displayTime(newHours, newMinutes, newSeconds);

console.log("Измененное время (минуты):");
var [newHours, newMinutes] = addMinutes(20, 30, 15);
displayTime(newHours, newMinutes, 45);

console.log("Измененное время (часы):");
var newHours = addHours(20, 2);
displayTime(newHours, 30, 45);











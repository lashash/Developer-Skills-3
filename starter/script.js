// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1 გავიგოთ რა არის პრობლემა
//-რა არის ტეპერატურის ამპლიტუდა? პასუხი გასხვავება ყველაზე მაღალ და ყველაზე
//  დაბალ ტემპერატურას შორის

//როგორ გამოვიანგარიშოთ მაქსიმუმი და მინიმუმი ტემპერატურა?
//რა არის სენსორის შეცდომა? და რა უნდა გავაკეთოთ

//2) გავყოთ პატარა პრობლემებად
// - როგორ გავუკეთოთ იგნორირება შეცდომებს?
//ვიპოვოთ მაქსიმალური მნიშვნელობა ტემპერატურის მასივში
//ვიპოვოთ მინიმალური მნიშვნელობა ტემპერატურის მასივში
// გამოვაკლოთ მინიმალური მაქსიმუმს (ამპლიტუდა) და დავაბრუნოთ იგი

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//problema 2
//ფუნქციამ უნდა მიიღოს ტემპერატურის ორი მასივი

//1) გავაანალიზოთ პრობლემა
//ორი მასივის შემთხვევაში ფუნქციამ უნდა იმუშაოს ორ მასივზე ცალცალკე?
//არა მასივები უნდა გავაერთიანოდ

//2)დავყოთ ქვეპრობლემებად
//როგორ გავაერთიანოთ ორი მასივი?
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //C) FIX
    // value: Number(prompt('Degrees celsius')),
    value: 10,
  };
  //B) FIND
  console.log(measurement);

  console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
//A) IDENTIFY
console.log(measureKelvin());

//Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (max < curTemp) max = curTemp;
    if (min > curTemp) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

//A) IDENTIFY BUG
console.log(amplitudeBug);

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecase = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]} C in ${i + 1} days...`;
  }
  console.log('...' + str);
};

printForecase(arr1);
printForecase(arr2);

*/

const time = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const timeTracking = function (arr) {
  let totalTime = 0;
  let avrDaily;
  let mostWorked = arr[0];
  let numberOfDay = 0;
  let isFullTime;
  for (let i = 0; i < arr.length; i++) {
    totalTime = totalTime + arr[i];
    numberOfDay++;

    if (mostWorked < arr[i]) mostWorked = arr[i];
  }
  avrDaily = totalTime / arr.length;
  totalTime > 35 ? (isFullTime = true) : (isFullTime = false);

  console.log(totalTime, avrDaily, mostWorked, numberOfDay, isFullTime);
};
timeTracking(time);

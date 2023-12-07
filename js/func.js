function numberCheck() {

    let a = parseInt(prompt("Введите первое число:"));
    let b = parseInt(prompt("Введите второе число:"));

        if (a < b) {
            alert(`-1`);
        } else if (a > b) {
            alert(`1`);
        } else {
            alert(`0`);
        }
}

function factorial() {

    let a = parseInt(prompt("Введите число для вычисления факториала:"));

    let result = 1;
    for (let i = 2; i <= a; i++) {
        result *= i;
    }

    alert(`Факториал числа ${a}: ${result}`);
}

function turningStr() {

    let a = parseFloat(prompt("Введите первое число:"));
    let b = parseFloat(prompt("Введите второе число:"));
    let c = parseFloat(prompt("Введите третье число:"));


    let result = String(a) + String(b) + String(c);

    alert(`Результат: ${result}`);
}


function calculateFigure() {

    let a = parseFloat(prompt("Введите длину:"));
    let b = parseFloat(prompt("Введите ширину:"));

    if (!b) {
        b = a;
    }

    let result = a * b;

    alert(`Площадь: ${result}`);
}

function isPerfectNumber(number) {
    if (number <= 0) {
        return false;
    }

    let result = 0;

    for (let i = 1; i <= number / 2; i++) {
        if (number % i == 0) {
            result += i;
        }
    }

    return result == number;
}

function pnInRange() {
    let a = parseFloat(prompt("Введите начало диапазона:"));
    let b = parseFloat(prompt("Введите конец диапазона:"));
    
    if (a > b) {
        alert(`Ошибка!`);
        return false;
    }

    let result = "";

    for (let i = a; i <= b; i++) {
        if (isPerfectNumber(i)) {
            result += i + " ";
        }
    }

    if (result) {
        alert(`Совершенные числа в диапазоне от ${a} до ${b}: ${result}`);
    } else {
        alert(`В данном диапазоне нет совершенных чисел`);
    }
}

function fullTime() {

    let hours = parseInt(prompt("Введите часы:")) || 0;
    let minutes  = parseInt(prompt("Введите минуты:")) || 0;
    let seconds  = parseInt(prompt("Введите секунды:")) || 0;

    if (hours < 0 || hours >= 24 || minutes  < 0 || minutes  >= 60 || seconds  < 0 || seconds  >= 60) {
      alert('Ошибка!');
      return false;
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes  = minutes  < 10 ? '0' + minutes  : minutes ;
    seconds  = seconds  < 10 ? '0' + seconds  : seconds ;

    alert(`${hours} :  ${minutes} : ${seconds}`);
  }

  function timeToSeconds(hours, minutes, seconds) {
    if (hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60 || seconds < 0 || seconds >= 60) {
        console.log('Ошибка!')
        return false; 
    }
  
    let result = (hours * 3600) + (minutes * 60) + seconds;
    return result;
  }
  
  function secondsToTime(n) {
    if (n < 0) {
        console.log('Ошибка!');
        return false;
    }
  
    let hours = Math.floor(n / 3600);
    let minutes = Math.floor((n % 3600) / 60);
    let seconds = n % 60;
  
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    return `${hours} : ${minutes} : ${seconds}`; 
  }

  function diffToTime(hours, minutes, seconds, hours1, minutes1, seconds1) {
    return secondsToTime(timeToSeconds(hours, minutes, seconds) - timeToSeconds(hours1, minutes1, seconds1));
  }
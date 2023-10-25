const dateH1 = document.querySelector('.date h1');
const dateP = document.querySelector('.date p');
const daysHMTL = document.querySelector('.days');

const date = new Date();

const monthDays = daysHMTL;

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Dezember"
];

dateH1.innerHTML = months[date.getMonth()];

dateP.innerHTML = date.toDateString();

let days = "";

for (let i = 1; i <= lastDay; i++) {

    days += `<div>${i}</div>`;
}

monthDays.innerHTML = days;

console.log(lastDay)
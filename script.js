const dateH1 = document.querySelector('.date h1');
const dateP = document.querySelector('.date p');
const daysHMTL = document.querySelector('.days');

const date = new Date();

date.setDate(1);

const monthDays = daysHMTL;

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

const nextDays = 7 - lastDayIndex - 1;

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

for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class = "prev-date">${prevLastDay - x + 1}</div>`;
}


for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class="today">${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }
}

for (let y = 1; y <= nextDays; y++) {
    days += `<div class="next-date">${y}</div>`

}

monthDays.innerHTML = days;

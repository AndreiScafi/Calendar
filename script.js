const dateH1 = document.querySelector('.date h1');
const dateP = document.querySelector('.date p');

const date = new Date();

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


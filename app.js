const dateNumberElements = document.querySelectorAll('.date-number');
const previousButton = document.querySelector('button.previous');
const nextButton = document.querySelector('button.next');

const monthElement = document.querySelector('.month');

const now = new Date();
let currentMonth = now.getMonth();
let currentYear = now.getFullYear();

const monthIndexToName = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

nextButton.addEventListener('click', () => {
    if(currentMonth ===11){
        currentYear++;
        currentMonth =0;
    }else{
        currentMonth++;
    }
    renderMonth(currentMonth, currentYear);
})



previousButton.addEventListener('click', () => {
    if(currentMonth === 0){
        currentMonth =11;
        currentYear--;
    }else{
        currentMonth--;
    }
    renderMonth(currentMonth, currentYear);
})

const renderMonth = (monthIndex, year) => {
 console.log(monthIndex, year);
//  Day 0 is the last day in the previous month
// How many days in that month
 const numDaysInMonth = new Date(year, monthIndex+1, 0).getDate();
 const firstDate = new Date(year, monthIndex);
//  index of first day
 const firstDay = firstDate.getDay();


//  el- each element  i-index
monthElement.innerText = `${year} - ${monthIndexToName[monthIndex]}`;
 dateNumberElements.forEach((el, i) => {
     const dateNumber = (i+1)-firstDay;
     if(dateNumber > 0 && dateNumber <= numDaysInMonth){
         el.innerText = dateNumber;
     } else {
        el.innerText = ''; 
     }
        const today = new Date();
        // console.log(today)
    if(today.getMonth() === monthIndex && today.getFullYear() === year && today.getDate() === dateNumber){
           el.classList.add('today');
       }else {
           el.classList.remove('today');
       }
 })
} 

renderMonth(currentMonth, currentYear);

let content = document.getElementById('content');

let someText = 'ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id), c=3; This does not work if http://nothing+changes , presumably because MySQL doesnt run the https://dummy=update , You have been automatically logged out due to http://inactivity+of=1440= seconds . Once you log in again, you https://should be able to resume the work where you left off.'

content.innerText = someText;

let arrayText = someText.split(" ");
let links = arrayText.filter(function (val, i, arr) {
    return val.startsWith('http://') || val.startsWith('https://');
});

let ul = document.querySelector('ul');
console.log(ul);
for (let value of links ){
    ul.innerHTML+=`<li>${value}</li>`;
}
let x = 5;



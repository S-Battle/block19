const body = document.querySelector('body');
body.setAttribute('style', 'background-color: grey');

let avgPrice = 0;
let sum = 0;
let numPrices =  0;

const randNames = ['Sophia', 'Liam', 'Olivia', 'Noah', 'Riley', 'Jackson', 'Emma', 'Aiden', 'Ava', 'Elijah', 'Isabella', 'Grayson', 'Aria', 'Lucas', 'Aaliyah', 'Oliver', 'Amelia', 'Caden', 'Mia', 'Mateo', 'Layla', 'Muhammad'];
const randOcc = ['Writer', 'Teacher', 'Programmer', 'Stenographer', 'Grant Writer', 'Artist', 'Appraiser', 'Accountant', 'Book Designer', 'Bookkeeper', 'Private Investigator', 'Data Scientist', 'Dietitian', 'Fashion Designer', 'Lyrics Writer', 'Music Producer', 'Proofreader', 'Realtor', '3D Artist'];
const randSalaries = [10, 15, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

const newFreelanceRow = ((name, occupation, startingPrice) => {
    const newRow = document.createElement('tr');
    const td1  = document.createElement('td');
    td1.setAttribute('style', 'width: 20vw; border: 1px solid black');
    td1.innerText = name;
    const td2 = document.createElement('td');
    td2.setAttribute('style', 'width: 20vw; border: 1px solid black');
    td2.innerText = occupation;
    const td3 = document.createElement('td');
    td3.setAttribute('style', 'width: 20vw; border: 1px solid black');
    td3. innerText = '$' + startingPrice;
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    newRow.appendChild(td3);
    freelanceTable.appendChild(newRow);
    avgPrice = calculateAvgPrices(startingPrice);
    avgPriceHeading.innerText = `The average starting price is $${avgPrice.toFixed(2)}`
})

const calculateAvgPrices = ((newPrice) => {
    numPrices = numPrices + 1;
    console.log(numPrices);
    sum = sum + newPrice;
    console.log(sum);
    let newAverage = sum/ numPrices;    
    return newAverage;
});

// const countDown = () => {
//     new Promise((resolve, reject) => {      
//         if(resolve){
//             let timeNow = Date.now();
//             console.log('Time Now: ' + timeNow);
//             console.log(Date.now() + 10000);
//             let finishTime = Date.now() + 10000;
//             console.log('Year: ' + finishTime);
//             while(timeNow < finishTime){
//             console.log('waiting');
//             timeNow = Date.now().toPrecision();
//             newFreelanceRow('Carol', 'Programmer', 70);
//         }              
//     }
//         else{ throw new error;}
//     } )
// }

let randomName = () => {
    return randNames[Math.floor(Math.random() * randNames.length)];
}
let randomOccupation = () => {
    return randOcc[Math.floor(Math.random() * randOcc.length)];
}
let randomSalaries = () => {
    return randSalaries[Math.floor(Math.random() * randSalaries.length)];
}

const countDown =   () =>{
    new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(newFreelanceRow('Carol', 'Programmer', 70))
    }, 2000)
    })
}

const randomAdd = () => {new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(newFreelanceRow(randomName(), randomOccupation(), randomSalaries() ));
    }, Math.floor((Math.random() * 3000) + 2000));
});
}





//Creating Container DIv
const containerDiv = document.createElement('div');
containerDiv.setAttribute('id', 'container');
containerDiv.setAttribute('style', 'display: flex; flex-direction: center; justify-content: center; flex-direction: column; align-items: center');
body.insertBefore(containerDiv, body.lastChild);


//Creating h1 Freelancer Forum Heading
const topHeader = document.createElement('h1');
topHeader.innerText = "Freelancer Forum";
containerDiv.insertBefore(topHeader, containerDiv.lastChild);

//Creating h2 The average Starting price is .... Heading
const avgPriceHeading = document.createElement('h2');
avgPriceHeading.innerText = `The average starting price is $${avgPrice}`
containerDiv.appendChild(avgPriceHeading);

//Creating Available Freelancers h1 heading
const availFreelance = document.createElement('h1');
availFreelance.innerText = 'Available Freelancers';
availFreelance.setAttribute('style', 'font-weight: bold');
containerDiv.appendChild(availFreelance);

//Creating table element
const freelanceTable = document.createElement('table');
//freelanceTable.setAttribute('style', 'width: 80vw;');
containerDiv.appendChild(freelanceTable);

//Add first row plus Headers For table
const tableRow1 = document.createElement('tr');
const thName = document.createElement('th');
thName.style = 'font-weight: bold; font-size: 1.5rem; border: 1px solid black';
thName.innerText = "Name";
const thOcc = document.createElement('th');
thOcc.innerText = 'Occupation';
thOcc.style = 'font-weight: bold; font-size: 1.5rem; border: 1px solid black';
const thSP = document.createElement('th');
thSP.innerText = 'Starting Price';
thSP.style = 'font-weight: bold; font-size: 1.5rem; border: 1px solid black';
freelanceTable.appendChild(tableRow1);
tableRow1.appendChild(thName);
tableRow1.appendChild(thOcc);
tableRow1.appendChild(thSP);
newFreelanceRow('Alice', 'Writer', 30);
newFreelanceRow('Bob', 'Teacher', 50);



countDown();

setInterval(randomAdd, 5000);








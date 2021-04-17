document.querySelector("body").style.backgroundColor ="#f6f6f1";


// #1: use .textContent to add text to the "h1" element
const addTitle = () => {
    let element = document.querySelector('h1'); 
    console.log(element);
    element.textContent = 'Harry Potter Character Selection';
 };
 
 addTitle();


// #2: using .querySelector to find 1st element with class "needFlex"
const flexIt = () => {
    let iFlex = document.querySelector('.needFlex');
    console.log(iFlex);
    iFlex.classList.toggle('flexIt');
}

 flexIt();

// #3: create a function using .querySelectorAll for paragraphs with class "description"

const addHouses = () => {
    const iHouse = document.querySelectorAll ('.description');
    let newiHouse = ["gryffindor","hufflepuff","ravenclaw","slytherin"];
    for(let i = 0; i < iHouse.length; i++){
        iHouse[i].classList.add(newiHouse[i])
    } 
    console.log(newiHouse); 
}

addHouses();

// #4: Using the arrow (=>)functn. "emphasis"
// using .querySelectorAll to select the class containing 'houses'
// apply the toggle event

const emphasize = (house) =>{
    let iHouse2 = document.querySelectorAll(`.${house}`);
    for(let item of iHouse2){
        item.classList.toggle('emphasis')
    }

}

// const emphasize = (house) => {   
//     let iHouse2 = document.getElementsByClassName(house);
//     // console.log(iHouse2);    
//     for(each of iHouse2) {    
//         each.classList.toggle('emphasis');    
//     }
// };
emphasize();


// Bonus:
// Find the attribute holding the text 'The Snitch'
// create function or arrow function using .querySelector 
// apply the toggle event

// const hideTheSnitch = () =>{
//     let iSnitch = document.querySelector('#golden');
//     iSnitch.classList.toggle('snitch')
// }

// hideTheSnitch();



// (I wonder if getElementByID could also be used here) YES it does!!!
const  hideTheSnitch = () => {
    let iSnitch = document.getElementById("golden");
    if (iSnitch.style.display === "none"){
        iSnitch.style.display = "block";
    }else {
        iSnitch.style.display = "none";
    }
}
hideTheSnitch();















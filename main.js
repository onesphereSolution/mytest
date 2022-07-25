
const myHeading = document.querySelector('h1');
myHeading.textContent = "This thing is hard sha"
let myVar = "I am a boy"
const myNumber = 4
const name = "Aisosa"
const accountBalance = "1500"
// learning booleans
const isHungry = true;
const isAbsent = false;

const myFriends = ['Kelvin', 'Ted', 'Oge', 'Alma']
const foodItems = ['rice', 'beans', 'yam']

/*
learning about objects
*/

let users = {
    name: 'David',
    school: 'Uniben',
    location: 'Benin' 
}
 // styling

 const happyBirthday = document.getElementById('happy')
 happyBirthday.style.color = 'blue';

 // operators

 const firstName = 'David '
 const lastName = 'Okunrobo'
 const fullName = firstName + lastName
 const thankYou = document.getElementById('praise');
 thankYou.textContent = fullName;

 const firstNumber = 15
 const secondNumber = 12
 const newNumber = firstNumber*secondNumber
 const multiplyNumber = document.getElementById('number')
 multiplyNumber.textContent = newNumber;

 //conditionals

//  let soup = 'banga'
//  if(soup === 'banga'){
//     alert('sweet soup');
//  }
//  else{
//     alert('bitter soup')
//  }

 const customer = 'Dave'
 const age = 13
 if(customer === 'Dave' && age > 18){
    alert('You are too old to drink beer');
 }
 else if(customer === 'Dave' && age=== 18){
    alert('You are allowed to drink beer')
 }
 else{
    alert('You are not allowed to drink beer')
 }



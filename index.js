//Parameters



// function hello(name) {

//  return 'Hola ' + name; 
// }


// console.log(hello('Massi'));



// function add(x = 3, y = 0 ) {
//     return x + y;
// }


// console.log(add(10, 90.1));
// console.log(add(11, 9.2));
// console.log(add(11234, 9222));
// console.log(add(11, 9.2));


// objects

// const user = {
//     name : 'Damian',
//     lastname : 'Galeano',
//     address: {
//         country: 'spain',
//         city: 'Bilbao',
//         street: 'San fernando'
//     },

//     friends: ['Massi', 'Salvador'],
//     active: true,
//     sendEmail: function() {
//         return 'Sending email...'
//     }

// }


// console.log(user.address.country);
// console.log(user.address.country);
// console.log(user.sendEmail());
// console.log(user.friends);



// const name = 'laptop';
// const price = 9000;

// const newProduct = {
//     name,
//     price
// }


// manipulation 

// console.log(newProduct);


// const title = document.createElement('h1')
//   title.innerText = 'Hello world from JS'

//   document.body.append(title)


// const button = document.createElement('button')
//  button.innerText = 'Click'



// button.addEventListener('click', function() {
//   title.innerText = 'Text Update'
//   alert('Text Update')
  
// })

//  document.body.append(button)


// Destructuring

// const user =  {
//   name: 'Damian',
//   age: 36
// }

// function printInfo(user){
//   const {name, age} = user;
//   return '<h1>Hola ' + name + '</h1>'
// }


// console.log(printInfo(user));


// document.body.innerHTML = printInfo(user)


// handleClick

// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.createElement('button');
//   button.innerText = 'Click me';

//   const isAuthorized = false;

//   button.addEventListener('click', () => {
//     if (isAuthorized) {
//       return alert('is authorized');
//     }
//     alert('You are not authorized');
//   });

//   document.body.append(button);
// });


// document.body.appemd




// console.log('Hello Again');

// let newName = 'Damian'
// var lastname = 4
// const myName = 'El Damian'


// console.log(newName);

const firstName = 'Damian'

const completeFirstNamet =  firstName.toUpperCase();
console.log(completeFirstNamet);














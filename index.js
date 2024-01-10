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

const user = {
    name : 'Damian',
    lastname : 'Galeano',
    address: {
        country: 'spain',
        city: 'Bilbao',
        street: 'San fernando'
    },

    friends: ['Massi', 'Salvador'],
    active: true,
    sendEmail: function() {
        return 'Sending email...'
    }

}


console.log(user.address.country);
console.log(user.address.country);
console.log(user.sendEmail());

"use strict";
let guests = ['Yahya', 'Haris', 'Fatimah', 'Shahid'];
// Unfortunately I found a big table for inviting more guests
// Invite at the beginning
let add1 = guests.unshift('Meraaj');
console.log(guests);
// Inviting at the middle
let add2 = guests.splice(guests.length / 2, 0, "Zubaida");
console.log(guests);
// Inviting at the end
let add3 = guests.push("Usman");
console.log(guests);
guests.forEach(guest => {
    console.log(`${guest}, would you like to come to my dinner party?`);
});

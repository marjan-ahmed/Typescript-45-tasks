"use strict";
let transports = ['Tesla Car', 'Yahama Motorcycle', 'Ferrari Car'];
for (let i = 0; i < transports.length; i++) {
    console.log(`I would like to own a ${transports[i]}`);
}
//              OR
transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});

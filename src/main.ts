export {};

const tickets = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// tickets.forEach( (ticket, index) => console.log(ticket, index));

// const discount = tickets.map( ticket => ticket * 0.9);
// console.log(discount);

const message = 'hello my friends ';
const newMessage: string = message.replace(/\s+$/g, '');
console.log('newMessage', newMessage + 'End');
const words: string[] = newMessage.split(' ');
console.log('words', words);
const words2: string[] = message.replace(/\s+$/g, '').split(' ');
console.log('words2', words2);
console.log('words2', words2 + '');
const inputValue: string = '-1 -2 0 1 2 3    ';
console.log('integerValues', inputValue, typeof inputValue);
const numbers: number[] = inputValue.replace(/\s+$/g, '').split(' ').map( number => parseInt(number, 10));
console.log('numbers', numbers);

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputStringValue: string = '';
// process.stdin.on('data', function (inputStdin: string): void {
//     inputStringValue += inputStdin;
//     console.log('inputStringValue', inputStringValue);
    
// });

console.log('names', names);
let sortedNames: string[] = names.sort();
console.log('sortedNames', sortedNames);
// process.env['OUTPUT_PATH']
const path = process.env['OUTPUT_PATH'];
console.log('path', path);
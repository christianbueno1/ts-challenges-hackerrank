export {};
'use strict';

console.log('Hello, World! 111');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
    console.log('inputString', inputString);
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';
    console.log('inputLines', inputLines);
    console.log('inputString', inputString);

    main();
});

function readLine(): string {
    // const index: number = currentLine++;
    // console.log('index', index);
    // return inputLines[index];
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    console.log('arr', arr);
    
    console.log((arr.filter((x) => x > 0).length / arr.length).toFixed(6));
    console.log((arr.filter((x) => x < 0 ).length / arr.length).toFixed(6));
    console.log((arr.filter((x) => x === 0).length / arr.length).toFixed(6));


}

function main() {
    console.log("welcome to the main function");

    const line = readLine().trim();
    console.log('line', line);

    const n: number = parseInt(line, 10);
    // console.log("the arr size is n =", n, typeof n);
    console.log("the arr size is n =", n);


    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    // console.log("arr", arr, typeof arr);
    

    plusMinus(arr);
}

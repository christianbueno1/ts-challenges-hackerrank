export {};
'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    // Write your code here
    const amPm: string = s.slice(-2);
    const time: string = s.slice(0, 8);
    const timeArray: string[] = time.split(':');
    const hours: number = parseInt(timeArray[0], 10);
    const minutes: string = timeArray[1];
    const seconds: string = timeArray[2];
    let newTime: string = '';
    if (amPm === 'AM' && hours === 12) {
        newTime = `00:${minutes}:${seconds}`;
    } else if (amPm === 'PM' && hours < 12) {
        newTime = `${hours + 12}:${minutes}:${seconds}`;
    } else {
        // add leading zero to hours
        const hoursMilitary: string = timeArray[0].padStart(2, '0');
        newTime = `${hoursMilitary}:${minutes}:${seconds}`;
    }
    return newTime;

}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH'] || 'default1.txt');

    const s: string = readLine();

    const result: string = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

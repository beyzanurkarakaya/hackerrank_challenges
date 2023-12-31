'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    
    let sumArray = [];
    
    let h = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            sumArray[h] = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                    + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1]
                    + arr[i+2][j+2];
            h++;
        }
    }

    sumArray.sort();
    
    let maxValue = -99999;
    for (let x = 0; x < 16; x++){
        if (sumArray[x] > maxValue)
            maxValue = sumArray[x];
    }
    
    console.log(maxValue);
}

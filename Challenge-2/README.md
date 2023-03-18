Introduction
Brief: 
Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

Working:
First, to allow me to test the working of the code, I set up the module called readline to allow the users to input a speed, and receive output on the terminal. Below is a code for the same: 
    const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question('Enter speed: ', (speed) => {
    detectSpeed(speed);
    rl.close();
    });

Code to the Brief:
the first thing is to create a function called 'detectSpeed' that will calculate the number of demerit points a driver should receive based on their speed. 
    function detectSpeed(speed) {
the line above defines a function, that takes a default parameter of speed. which, shall be passed when the function is called. 

The second is to create two variables: one that sets the speed limit to 70 and the other that sets the points per kilometer to 5. This is done as follows: 
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

The if statement follows, taking the conditions as outlined in the brief. Below is the code: 
    if (speed < speedLimit) {
    console.log("Ok");
     } else {

to calculate the number of demerit points that the driver should receive, a formula is defined as follows: 
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);


the if statement follows. As guided using the example provided, if the driver's demerit points are greater than 12, the an output code is executed and prints "License suspended" to the console. Otherwise, the code inside the else block will be executed and the number of demerit points printed to the console. The code below is used for the same. 
    if (demeritPoints > 12) {
    console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }

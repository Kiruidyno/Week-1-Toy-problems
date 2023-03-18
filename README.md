# Week-1-Toy-problems

# Challenge 1: Student Grade Generator (Toy Problem)
Introduction
In this lab, the brief wanted us to write a function that prompts the user to input student marks. The input should be between 0 and 100. The corresponding output was as defined below:

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

Getting started on the brief: 

The fisrt thing is to define a Node.js readline module to prompt users input marks. I struggled with the prompt package server and stumbled on this, so when it worked, I chose to go with it. An advantage of it is that it is built into the Node.js, meaning there is no need to make any isntallations for the brief. Below is the code for the readline module: 
    const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

What this does is to create a standard input/output on the vs code terminal. 


moving further, I created a function called, calculateGrade(), which would prompt the user to enter a mark between the defined two values of 0 and 100. 
      function calculateGrade() {
    readline.question("Enter the student's mark (between 0 and 100): ", (input) => {
      let marks = Number(input);
It then checks if the input if between 0 and 100, and if its not, it logs an error message to the console and closes the readline interface. 
        
        if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        readline.close();
        return;


If the input is valid, it determines the grade based on the mark using the else if conditional statement- see below:

      if (marks > 79) {
        grade = "A";
      } else if (marks >= 60 && marks <=79 ) {
        grade = "B-";
      } else if (marks > 49 && marks <=59) {
        grade = "C-";
      } else if (marks > 39 && marks <=49) {
        grade = "D-";
      } else {
        grade = "E-";
      }

If the input is valid, it calculatesGrade based on the mark entered by the user, and logs the grade to the console. 

the calculateGrade () function is called at the end of the script to run the program. 






# Challenge 2: Speed Detector (Toy Problem)
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







# Challenge 3: Net Salary Calculator (Toy Problem)
Challenge 3- Net Salary Calculation Program
Learning Goals
- use of conditional statements i.e. else if
- Variables
- use of operators

Introduction
the brief of the challenge is to calculate an employee's net salary based on their gross pay, benefits, and deductions. The program prompts the user to enter their gross pay and any benefits, and then calculates the NHIF, NSSF, and tax deductions to determine the employee's net salary.

Dependencies
We first start by defining dependencies, which is to require the readline module to read input from the user. This module is inbuilt in the Node.js standard library. Below is a snipet of the same:
    const readline = require('readline');

        // Define tax rate and deduction values
        const NSSF_DEDUCTION_PERCENTAGE = 0.06; // 6% NSSF deduction percentage

        // Create readline interface
        const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });

        // Prompt user for gross pay
        rl.question('Enter your gross pay: ', (grossPay) => {
        rl.question('Enter any benefits (e.g. housing allowance): ', (benefits) => {


Deduction Values
We move further, and define the constants for the deduction values. These include:
    NSSF_DEDUCTION_PERCENTAGE: The percentage of the gross salary that is deducted for NSSF (6%).
    NHIF_DEDUCTION: The NHIF deduction value, which is calculated based on the gross pay using a tiered system.

Based on this, the script calculates the NSSF deduction based on the gross salary and the NSSF deduction %. 

The NHIF deduction is calculated using a tiered system based on the gross pay. The deduction values are as follows:

Gross Pay Range	NHIF Deduction
<= 5,999	150
6,000 - 7,999	300
8,000 - 11,999	400
12,000 - 14,999	500
15,000 - 19,999	600
20,000 - 24,999	750
25,000 - 29,999	850
30,000 - 34,999	900
35,000 - 39,999	950
40,000 - 44,999	1,000
45,000 - 49,999	1,100
50,000 - 59,999	1,200
60,000 - 69,999	1,300
70,000 - 79,999	1,400
80,000 - 89,999	1,500
90,000 - 99,999	1,600
>= 100,000	1,700

Tax Calculation
We also calculate the tax based on the ross pay using a tiered system.

Total Deductions

The value for total deduction is done using a variable totalDeductions, which adds up three values to get the total amount of deductions from the gross salary. These values are represented by three variables: NHIF_DEDUCTION, ssfDeduction and tax.

Net Salary

We then computed a net salary as follows:
Const netSalary = grossSalary - totalDeductions;

COnclusion
In conclusion, the code calculates the total deductions and net salary. It then outputs these values to the console using console.log. The rl.close() method is called to close the readline interface.







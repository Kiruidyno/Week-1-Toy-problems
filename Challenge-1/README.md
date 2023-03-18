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


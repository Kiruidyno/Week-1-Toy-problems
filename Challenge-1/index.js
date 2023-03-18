const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calculateGrade() {
    readline.question("Enter the student's mark (between 0 and 100): ", (input) => {
      let marks = Number(input);
  
      // Check if input is valid
      if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        readline.close();
        return;
      }
    
      // Determine the grade based on the marks
      let grade;
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
    
      console.log(`The student's grade is ${grade}.`);
      readline.close();
    });
  }
  
  calculateGrade();
  
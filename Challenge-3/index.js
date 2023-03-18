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

    // Convert input to number
    grossPay = parseFloat(grossPay);
    benefits = parseFloat(benefits);

    // Calculate deductions
    let nhifDeduction = 0;
    if (grossPay <= 5999) {
      nhifDeduction = 150;
    } else if (grossPay <= 7999) {
      nhifDeduction = 300;
    } else if (grossPay <= 11999) {
      nhifDeduction = 400;
    } else if (grossPay <= 14999) {
      nhifDeduction = 500;
    } else if (grossPay <= 19999) {
      nhifDeduction = 600;
    } else if (grossPay <= 24999) {
      nhifDeduction = 750;
    } else if (grossPay <= 29999) {
      nhifDeduction = 850;
    } else if (grossPay <= 34999) {
      nhifDeduction = 900;
    } else if (grossPay <= 39999) {
      nhifDeduction = 950;
    } else if (grossPay <= 44999) {
      nhifDeduction = 1000;
    } else if (grossPay <= 49999) {
      nhifDeduction = 1100;
    } else if (grossPay <= 59999) {
      nhifDeduction = 1200;
    } else if (grossPay <= 69999) {
      nhifDeduction = 1300;
    } else if (grossPay <= 79999) {
      nhifDeduction = 1400;
    } else if (grossPay <= 89999) {
      nhifDeduction = 1500;
    } else if (grossPay <= 99999) {
      nhifDeduction = 1600;
    } else {
      nhifDeduction = 1700;
    }

    const grossSalary = grossPay + benefits;
    const NHIF_DEDUCTION = nhifDeduction;
    const nssfDeduction = grossSalary * NSSF_DEDUCTION_PERCENTAGE;

    // Calculate tax
    let tax = 0;
    if (grossPay <= 24000) {
      tax = grossPay * 0.1;
    } else if (grossPay <= 288000) {
      const taxableAmount = grossPay - 24000;
      tax = 2400 + (taxableAmount * 0.25);
    } else {
      const taxableAmount = grossPay - 288000;
      tax = 46200 + (taxableAmount * 0.3);
    }

    const totalDeductions = NHIF_DEDUCTION + nssfDeduction + tax;
    const netSalary = grossSalary - totalDeductions;

    console.log(`Gross salary: ${grossSalary}`);
    console.log(`NHIF deduction: ${NHIF_DEDUCTION}`);
    console.log(`NSSF deduction: ${nssfDeduction}`);
    console.log(`Tax: ${tax}`); 
    console.log(`Total deductions: ${totalDeductions}`);
    console.log(`Net salary: ${netSalary}`);
    rl.close();
    
});
});
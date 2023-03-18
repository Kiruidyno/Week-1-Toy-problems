const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter speed: ', (speed) => {
  detectSpeed(speed);
  rl.close();
});

function detectSpeed(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  if (speed < speedLimit) {
    console.log("Ok");
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
}

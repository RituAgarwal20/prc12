
var trex ,trex_running;
function preload(){
  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  function findOddNumbers(start, end) {
    const oddNumbers = [];
  
    for (let i = start; i <= end; i++) {
      if (i % 2 !== 0) {
        oddNumbers.push(i);
      }
    }
  
    return oddNumbers;
  }
  
  const positiveOddNumbers = findOddNumbers(1, 20); // Example for positive numbers
  const negativeOddNumbers = findOddNumbers(-20, 1); // Example for negative numbers
  
  console.log("Positive Odd Numbers:", positiveOddNumbers);
  console.log("Negative Odd Numbers:", negativeOddNumbers);
  
}

function draw(){
  background("white")
  

}

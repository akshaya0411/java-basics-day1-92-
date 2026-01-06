//compound interest
function calculateCompoundInterest(principal, rate, time) {
  const amount = principal * Math.pow((1 + rate / 100), time);
  return amount - principal;
}
// Example usage:
const principal = 1000; // Principal amount
const rate = 5; // Annual interest rate in percentage
const time = 2; // Time in years
const interest = calculateCompoundInterest(principal, rate, time);
console.log(`Compound Interest: ${interest}`); // Output: Compound Interest: 102.
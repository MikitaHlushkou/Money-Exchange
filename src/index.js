// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
var solution = {};
if (currency<=0){
return solution;}
if (currency>=10000){
solution.error = "You are rich, my friend! We don\'t have so much coins for exchange";
return solution;}
if (currency>=50){
solution.H=Math.floor(currency/50);
currency = currency%50;}
if (currency>=25){
solution.Q = Math.floor(currency/25);
currency = currency%25;}
if (currency>=10){
solution.D = Math.floor(currency/10);
currency = currency%10;}
if (currency>=5){
solution.N = Math.floor(currency/5);
currency = currency%5;}
if (currency>=1){
solution.P=currency/1;}
return solution;}

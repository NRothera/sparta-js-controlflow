// var moneyInPocket = prompt("How much money do you have?");
//
// if (moneyInPocket > 10){
//   console.log('I can buy a drink');
// }else if ( moneyInPocket > 5){
//   console.log('I can buy a snack');
// }else{
//   console.log("Guess I'll be going hungry today");
// }


var moneyInPocket = prompt('How much money do you have?');
var drinksHad = prompt('How many drinks have you had?')
var freeCrips = prompt('How much are crips?');

 if (moneyInPocket > 10 &&  drinksHad < 3) {
  console.log("I will buy another drink");
} else if (moneyInPocket > 5 || freeCrips === 0){
  console.log("I'll buy some crisps");
}else{
  console.log('Off home I go');
}

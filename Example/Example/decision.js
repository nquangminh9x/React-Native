// return false to cheat, true to cooperate
const decide = (history = []) => {
  
  // const IfIChooseTrue = history.filter(historyDecide => historyDecide.yours == true);
  // const IfIChooseFalse = history.filter(historyDecide =>historyDecide.yours == false);
  // const interestRateIfIChooseTrue = IfIChooseTrue.map(historyDecideIChooseTrue => totalMoney(historyDecideIChooseTrue.yours , historyDecideIChooseTrue.theirs));
  // const interestRateIfIChooseFalse = IfIChooseFalse.map(historyDecideIChooseFalse => totalMoney(historyDecideIChooseFalse.yours , historyDecideIChooseFalse.theirs));
  // const totalMoneyIfIChooseTrue = interestRateIfIChooseTrue.reduce((sum , number) => number+sum , 0);
  // const totalMoneyIfIChooseFalse = interestRateIfIChooseFalse.reduce((summ , numberr) => numberr+summ , 0);
  // return totalMoneyIfIChooseFalse >= totalMoneyIfIChooseTrue ? false : true;
  return history[history.length].theirs;
}
// function totalMoney(me ,  you){
 
//  return me == false ? (you==true ? 500+ 3 : 500):(you==true ? 500+ 2 :  500-1);
  
// }
 
module.exports = decide; 


// return false to cheat, true to cooperate
const decide = (history = []) => {
  
 return history.length==0 ? true : history[history.length - 1].theirs; 
  // const IfIChooseTrue = history.filter(historyDecide => historyDecide.yours == true);
  // const IfIChooseFalse = history.filter(historyDecide =>historyDecide.yours == false);
  // const interestRateIfIChooseTrue = IfIChooseTrue.map(historyDecideIChooseTrue => totalMoney(historyDecideIChooseTrue.yours , historyDecideIChooseTrue.theirs));
  // const interestRateIfIChooseFalse = IfIChooseFalse.map(historyDecideIChooseFalse => totalMoney(historyDecideIChooseFalse.yours , historyDecideIChooseFalse.theirs));
  // const totalMoneyIfIChooseTrue = interestRateIfIChooseTrue.reduce((sum , number) => number+sum , 0);
  // const totalMoneyIfIChooseFalse = interestRateIfIChooseFalse.reduce((summ , numberr) => numberr+summ , 0);
  // return totalMoneyIfIChooseFalse >= totalMoneyIfIChooseTrue ? false : true;
  
}
// function totalMoney(me ,  you){
 
//  return me == false ? (you==true ? 500+ 3 : 500):(you==true ? 500+ 2 :  500-1);
  
// }
 function coOperate(enemyLastChoose){
   return enemyLastChoose = true ? true :((Math.floor(Math.random()*30))==1 ? true : false);
 }
module.exports = decide; 


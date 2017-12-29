// return false to cheat, true to cooperate
const decide = (history = []) => {
  const result;
  totalMoneyIfIChooseFalse> totalMoneyIfIChooseTrue ? result = false : result = true;
  return result;
}
function totalMoney(me ,  you){
  const result;
  me == false ? (you==true ? result = 500+ 3 : result = 500):(you==true ? result = 500+ 2 : result = 500-1)
  return result;
}

  const IfIChooseTrue = history.filter(historyDecide ,historyDecide.yours == true);
  const IfIChooseFalse = history.filter(historyDecide ,historyDecide.yours == false);
  const interestRateIfIChooseTrue = IfIChooseTrue.map(historyDecideIChooseTrue , totalMoney(historyDecideIChooseTrue.yours , historyDecideIChooseTrue.theirs));
  const interestRateIfIChooseFalse = IfIChooseFalse.map(historyDecideIChooseFalse , totalMoney(historyDecideIChooseFalse.yours , historyDecideIChooseFalse.theirs));
  const totalMoneyIfIChooseTrue = interestRateIfIChooseTrue.reduce((sum , number) => number+sum , 0);
  const totalMoneyIfIChooseFalse = interestRateIfIChooseFalse.reduce((summ , numberr) => numberr+summ , 0);
module.exports = decide;    
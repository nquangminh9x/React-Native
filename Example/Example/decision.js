// return false to cheat, true to cooperate
const decide = (history = []) => {
    return history.length==0 ? true : coOperate(history[history.length - 1].theirs); 
 }
 function coOperate(enemyLastChoose){
   return enemyLastChoose == true ? true :((Math.floor(Math.random()*30))==1 ? true : false);
 }
module.exports = decide; 


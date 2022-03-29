// 批改作業 Promise
const correctTest = (name) => {
  return new Promise((resolve, reject)=>{
    console.log('批改中..');
    setTimeout(()=>{
      const score = Math.round(Math.random()*100)
      if( score >= 20) {
        resolve({name, score})
      } else {
        reject({name, score, message:'退學'})
      }
    },1200)
  })
}

// 檢查獎品 Promise
const checkReward = ( data ) => {
  const { score, name } = data;
  return new Promise((resolve, reject)=>{
    console.log('檢查獎品..');
    setTimeout(() => {
      if(score >= 90){
        resolve({name, score, reward:'電影票'})
      } else if( score >= 60) {
        resolve({name, score, reward:'嘉獎'})
      } else {
        reject({name, score, message:'打手心10下'})
      }
    }, 1200);
  })
}

// 批改作業 => 檢查獎品
correctTest('peter')
  // 寫法一： 切記若有加大括號一定要 return
  // .then(score=>{
  //   return checkReward(score); // 一定要 return，否則下一個 .then()的結果為 undefine
  // })
  // 寫法二：只有一行可以省略{return}，已自帶 return
  .then(score=> checkReward(score))
  .then(reward=>{
    console.log(reward);
  })
  .catch(err=>{
    console.log(err);
  })
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

// async、await
// async 非同步 function
const init = async function(){
  try{
    // await 等待
    const score = await correctTest('peter');
    const reward = await checkReward(score);
    console.log(reward);
  } catch(err){
    console.log('catch');
    console.log(err);
  }
}

init();
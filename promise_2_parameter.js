// Promise 參數
const checkScore = (score) => {
  return new Promise((resolve, reject)=>{
    console.log('批改中..');
    setTimeout(() => {
      if(score >= 60){
        resolve({score, message:'及格'})
      } else {
        reject({score, message:'不及格'})
      }
    }, 1000);
  })
}

// 帶入參數
checkScore(59).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})
// 建立Promise
const checkScore = (score) => {
  return new Promise((resolve, reject)=>{
    console.log('檢查是否及格..');
    setTimeout(()=>{
      if(score > 60){
        resolve(score)
      } else {
        reject('不及格')
      }
    }, 1000);
  })
}

// 成功 or 失敗結果
checkScore(80).then(res => {
  console.log(res);
}).catch(err=>{
  console.log(err);
})

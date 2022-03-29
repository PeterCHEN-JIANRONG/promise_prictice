// 建立 Promise
const checkScore = new Promise((resolve, reject)=>{
  console.log('批改中..');
  setTimeout(() => {
    const score = Math.round(Math.random()*100);
    if(score >= 60){
      resolve(`${score} 及格`)
    } else {
      reject(`${score} 不及格`)
    }
  }, 1000);
})

checkScore.then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})
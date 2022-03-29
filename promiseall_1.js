// 批改作業 Promise
const correctTest = (name) => {
  return new Promise((resolve, reject)=>{
    console.log('批改中..');
    setTimeout(()=>{
      const score = Math.round(Math.random()*100)
      console.log(`${name} 批改完`);
      if(score >= 60){
        resolve({name, score, message:'及格'})
      } else {
        resolve({name, score, message:'不及格'})
      }
    },Math.random()*4000 + 1000) // 1~5秒
  })
}

Promise.all([correctTest('peter'), correctTest('john'), correctTest('kai')])
.then(res=>{
  console.log(res);
})
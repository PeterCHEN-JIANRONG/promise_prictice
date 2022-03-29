
// 請打開 xmlHttpRequest.html 實作此範例

// 前端薪資 API
const api = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json'

// 將 XMLHttpRequest 改寫 Promise 格式
function getUrl(url){
  return new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  })
}

getUrl(api)
  .then(data=> console.log(JSON.parse(data)))
  .catch(err=> console.log(err))
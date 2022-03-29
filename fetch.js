
// 請打開 fetch.html 實作此範例

// 前端薪資 API
const url = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json'

fetch(url)
  .then(res => res.json()) // res.json() 是 Promise，回傳 json格式
  .then(data => console.log(data))
  .catch(err => console.log(err))
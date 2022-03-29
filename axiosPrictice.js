
// 前端薪資 API
const api = 'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json'

const axios = {
  get(url) {
    return new Promise((resolve, reject)=>{
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    })
  }
}

axios.get(api)
  .then(data=> console.log(JSON.parse(data)))
  .catch(err=> console.log(err))
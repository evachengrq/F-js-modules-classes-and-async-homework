export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json")
  .then(response => {
    if(response.status == 200) {
      return response.json()
    }
    return Promise.reject()
  }).then(data => {
    const {origin, author, content} = data;
    return [origin, author, content];
  })
  .catch(error => {
    console.log(error)
  })
}

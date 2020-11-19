// export const getPoetry = () => {
//   const result = fetch("https://v1.jinrishici.com/all.json")
//   .then(response => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       console.log(response.status)
//     }
//   })
//   .then(json => {
//     const {content, origin, author} = json;
//     return [origin, author, content]
//   })
//   .catch(err => console.log(err));
//   return result;
// }

export async function getPoetry() {

  try {
    const response = await fetch("https://v1.jinrishici.com/all.json");
    const json = await response.json();
    const {content, origin, author} = json;
    return [origin, author, content];
  } catch(err) {
    console.log(err)
  }
  
}
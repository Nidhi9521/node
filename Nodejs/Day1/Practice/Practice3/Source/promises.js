//simple promis
function add(a,b){
    return new Promise((resolve,reject)=>{
        if(a > 0 && b> 0){
            var sucess = {sucess:200,data: {"A": a , "B" : b},message:"sucess"}
            resolve(sucess);
        }else{
            var fail = {sucess:404,data: {"A": a , "B" : b}, message:"failure"}
            reject(fail);
            return;
        }
    })
}

add(-3,4).then(resolve=>{console.log(resolve)}).catch(reject=>console.log(reject));



//chaining Promise

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(20);
  }, 3 * 1000);
});

p.then((result) => {
  console.log(result); // 10
  return result * 2;
}).then((result) => {
  console.log(result); // 20
  return result * 3;
}).then((result) => {
  console.log(result); // 60
  return result * 4;
});



//Promise all

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved');
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved');
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved');
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
});



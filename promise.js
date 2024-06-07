let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello i am 1")
    },5000)
})

let promise2 = new Promise((resolve,reject)=>{
    reject("hello i am 2")
},5000)

let Promise3 = new Promise((resolve,reject)=>{
    resolve("hello i am 3")
},5000)

let resultPromise1 = Promise.all([promise1,promise2,Promise3])
resultPromise1.then((resolve)=>{console.log(resolve)})
              .catch((err)=>{console.log(err);})

let resultPromise2 = Promise.allSettled([promise1,promise2,Promise3])
resultPromise2.then((resolve)=>{console.log(resolve)})
              .catch((err)=>{console.log(err);})

let resultPromise3 = Promise.any([promise1,promise2,Promise3])    //it will return the 1st resolved one
resultPromise3.then((resolve)=>{console.log(resolve)})
              .catch((err)=>{console.log(err);})

let resultPromise4 = Promise.race([promise1,promise2,Promise3])
resultPromise4.then((resolve)=>{console.log(resolve)})
              .catch((err)=>{console.log(err);})

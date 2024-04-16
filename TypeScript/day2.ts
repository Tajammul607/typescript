function getUser(userId :number) :Promise<string>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(userId===1){
                resolve("You can now able to access")
            }else{
                reject("oops u can't if u want then create a new one");
            }
        },2000)
    })
}

// getUser(1).then((data)=>{
//     console.log("successfully fetch user" ,data)
// }).catch((error)=>{
//    console.log('enter correct user id')
// })


function fetchUserBasedOnEvenOdd(userId: number) : Promise<string>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(userId %2 ==0){
                resolve("you're good to go");
            }else{
                reject("Oops you hafta provide correct userId");
            }
        },500)
    })
}

// fetchUserBasedOnEvenOdd(1).then((data)=>{
//     console.log(`login successfully ${data}`)
// }).catch((err)=>{
//     console.log(`mismatch id please enter the right one ${err}`)
// })

function fetchData(): Promise<string> {
   return new Promise((resolve,reject)=>{
      let randomNumber =Math.random()*1 < 0.5;

      setTimeout(()=>{
        if(randomNumber){
            resolve("Mocked data successfully");
        }else{
            reject("failed to fetch the data")
        }
      },1000)
   })
}

// fetchData().then((data)=>{
//     console.log(`fetched ${data}`)
// }).catch((err)=>{
//     console.log('failed to fetch', err)
// })


const divideNumber=(num1 :number, num2: number): Promise<string> =>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(num1/num2 ==0){
            console.log('divisible by zero',num2)
        }else{
            console.log(`isn't divisible by zero ${num1}`)
        }
    }, 1000);
  })
}

divideNumber(3,4).then((data)=>{
    console.log(`success ${data}`)
}).catch((err)=>{
    console.log(`Error : ${err}`)
})


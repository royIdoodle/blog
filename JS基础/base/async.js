async function async1 () {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2 () {
  console.log('async2 start')
  
}


setTimeout(() => {
  console.log('setTimeout')
}, 0)

console.log('script start')

async1()

new Promise((resolve) => {
  console.log('promise start')
  resolve()
}).then(() => {
  console.log('promise end')
})

console.log('script end')

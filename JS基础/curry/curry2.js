// 不定参数的库里化
function addFn (init = 0, ...numbers) {
  return numbers.reduce((total, num) => total + num, init)
}


const curry = (fn) => {
  const argList = []
  return function currying(...args) {
    if (args.length) {
      argList.push(...args)
      return currying
    } else {
      return fn.apply(null, argList)
    }
  }
}

const add = curry(addFn)

const result = add(1,2)(3)(4)()
console.log(result)

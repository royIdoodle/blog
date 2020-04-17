// 固定参数的库里化
const addFn = (a, b, c) => {
  console.log({ a, b, c })
  return a + b + c;
}


const curry = (fn) => {
  const len = fn.length
  let argsList = []
  return function curryFn(...args) {
    argsList = argsList.concat(args)
    console.log(argsList)
    if (argsList.length >= len) {
      return fn.apply(null, argsList)
    } else {
      return curryFn
    }
  }
}

function currying(fn, length) {
  length = length || fn.length; 	// 注释 1
  return function (...args) {			// 注释 2
    return args.length >= length	// 注释 3
      ? fn.apply(this, args)			// 注释 4
      : currying(fn.bind(this, ...args), length - args.length) // 注释 5
  }
}

const add = curry(addFn);

const result = add(2, 3, 4)
console.log(result)

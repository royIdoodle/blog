const target = [
  1, [2, [3, [4, [5, [6, [7, [8]]]]]]],
]

Array.prototype.flat1 = function (depth = 1) {
  const list = this;
  return list.reduce((pre, cur) => {
    if(Array.isArray(cur) && depth > 0) {
      pre.push(...cur.flat1(depth - 1))
    } else {
      pre.push(cur)
    }
    return pre
  }, [])
}

Array.prototype.flat2 = function(depth = 1) {
  let list = this
  while (list.some(item => Object.prototype.toString.call(item)==='[object Array]') && depth > 0) {
    list = [].concat(...list);
    depth--;
  }
  return list;
}

let result1 = target.flat1(7)
let result2 = target.flat2(7)
console.log('--------------------')
console.log(result1, result2);
console.log('--------------------')

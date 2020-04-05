(function () {
  const root = this

  const generateName = (function () {
    let prefix = 0;
    return function (descriptionKey) {
      return `@@${descriptionKey}_${++prefix}`
    }
  })()

  const $Symbol = function (description) {
    // 先判断是否使用new操作符
    if (this instanceof $Symbol) throw new Error('Symbol is not a constructor')

    const $symbolForMap = []
    $Symbol.for = function (description) {
      // 对输入参数进行转换
      description = String(description)
      // 判断缓存中是否有
      if (!$symbolForMap[description]) {
        $symbolForMap[description] = generateName(description)
      }
      return $symbolForMap[description]

    }

    return generateName(description);
  }

  root.$Symbol = $Symbol
})()

var s1 = $Symbol('foo')
var s2 = $Symbol('foo')

console.log(s1 === s2)

var s3 = $Symbol.for('bar')
var s4 = $Symbol.for('bar')

console.log(s3, s4, s3 === s4)

var obj = {
  name: 'Jacl',
  [s1]: 'foo symbol'
}

console.log(Object.keys(obj))


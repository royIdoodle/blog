const generateName = (function () {
  let prefix = 0;
  return function (descriptionKey) {
    const key = `@@${descriptionKey}_${++prefix}`
    console.log(key)
    return key;
  }
})()

const $Symbol = function (description) {
  // 先判断是否使用new操作符
  if (this instanceof $Symbol) throw new Error('Symbol is not a constructor')
  
  var symbol = Object.create({
    toString: function() {
      return this.__Name__;
    },
    valueOf: function() {
      return this;
    }
  })
  
  Object.defineProperties(symbol, {
    '__Description__': {
      value: description,
      writable: false,
      enumerable: false,
      configurable: false
    },
    '__Name__': {
      value: generateName(description),
      writable: false,
      enumerable: false,
      configurable: false
    }
  });
  
  return symbol;
}

var s1 = $Symbol('foo')
var s2 = $Symbol('foo')
console.log(s1.__Name__, s2)
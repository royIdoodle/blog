function deepCopy(target, cache = []) {
  if (typeof target !== 'object' || target === null) {
    return target
  }
  const hit = cache.find(o => o.original === target)
  if (hit) {
    return hit.copy;
  }
  const copy = Array.isArray(target) ? [] : {};
  cache.push({
    original: target,
    copy
  })
  Object.keys(target).forEach(key => {
    copy[key] = deepCopy(target[key], cache)
  })
  return copy;
}
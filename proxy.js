import 'harmony-reflect'

const PROXY_KEY = '༼⌐■ل͟■༽'

export default function proxy(node) {
  if (node !== null && (typeof node === 'object' || typeof node === 'function') && !node[PROXY_KEY]) {
    let keys = Object.keys(node)
    for (let k of keys) {
      node[k] = proxy(node[k])
    }
    return new Proxy(node, {
      set(target, key, value) {
        console.log(`set ${key} to ${value}`)
        target[key] = proxy(value)
      },
      get(target, key) {
        // TODO: would be better to use some sort of reflection here, but `instanceof` doesn't work for proxies.
        // instead, we'll use an invisible property to determine if this is proxied.
        if (key === PROXY_KEY) return true
        // allow fetching the parent of an object
        if (key === '__parent') return node
        return target[key]
      }
    })
  } else {
    return node
  }
}

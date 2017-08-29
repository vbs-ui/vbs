const OBJECT_PROTOTYPE = '[object Object]'

function protoString (obj) {
  return Object.prototype.toString.call(obj)
}

/**
 * Vue data merge
 * @param  {Object} to      object that want to be merget to
 * @param  {Object} origins origin object sources
 */
export function merge (to, ...origins) {
  origins.forEach(from => {
    for (const key in from) {
      const value = from[key]
      // Just merge existed property in origin data
      if (to[key] !== undefined) {
        switch (protoString(value)) {
          case OBJECT_PROTOTYPE:
            merge(to[key], value)
            break
          default:
            to[key] = value
            break
        }
      }
    }
  })
}

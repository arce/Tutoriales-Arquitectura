/* eslint-disable no-useless-escape */
/* eslint-disable no-prototype-builtins */

// JSON Parse
export function parsesJSON(data = '') {
  return JSON.parse(JSON.stringify(data))
}

// Format dates
export function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}

// Check if object is empty
export function isEmptyObject(obj) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false
    }
  }

  return JSON.stringify(obj) === JSON.stringify({})
}
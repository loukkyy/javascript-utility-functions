import "./style.css"
import { some } from "./utils/array-functions"
import { filter } from "./utils/object-functions"

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
// Example 1: Test array
const array = [1, 10, 20, 50]
console.log(some((x) => x > 50, array))

// Example 2: Filter list of objects
const objects = [
  {
    name: "John",
    age: 31,
    gender: "male",
  },
  {
    name: "Maria",
    age: 42,
    gender: "female",
  },
  {
    name: "Stella",
    age: 28,
    gender: "female",
  },
]
console.log(filter(objects, { gender: "female" }))

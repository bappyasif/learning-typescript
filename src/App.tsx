import './App.css'

// type alias
type mathFunc = (a: number, b: number) => number

// interface
interface anotherMathFunc {
  (a: number, b: number):  number
}

const MultAnother: anotherMathFunc = (a, b) => a * b

const MultNums: mathFunc = (c, d) => c * d

function App() {
  const add = (a:number,b: number) => a + b
  // const logMsg = (message:string) => console.log(message) // typescript inference
  const logMsg = (message:string) :void => console.log(message) // specifying beforehand
  logMsg("smdb")

  const sub = function(a:number, b:number): number {
    return a - b
  }

  // required parameters needs to come before optional parameters
  const addAll = (a: number,b: number, c?: number) : number => {
    if(typeof c !== "undefined") {
      return a + b + c
    }

    return a + b
  }

  const sumAll = (a: number,b: number, c: number = 2) : number => {
    return a + b + c
  }

  // rest parameters
  const totalSum = (...nums: number[]) : number => nums.reduce((prev,curr) => prev + curr)

  const totalAdd = (a: number, ...nums: number[]) : number => a + nums.reduce((prev,curr) => prev + curr)

  // never type , mostly used for error type function 
  const showError = (errMsg: string): never => {throw Error(errMsg)}

  // never type also be used for functioins containing infinite loops or as such
  const inifnite = () => {
    let i: number = 1;
    while (true) i++
  }

  // to solve tha infite loop we can use a break and get a different return type other than never
  const infiniteBreak = () => {
    let i: number = 1;
    while (true) {
      i++
      if(i >= 100) break
    }

  }

  // custom typoe guard 
  const isNumber = (val: any) => {
    return val === "number" ? true : false
  }

  // useful never use case
  const numOrStr = (val:number | string ) : string => {
    if(typeof val === "string") return "string"
    if(isNumber(val)) return "number"
    return showError("this should never happen!!")
  }

  return (
    <>
      <h1>New Hands On Tutorial!!</h1>
      {add(2,4)}
      {sub(2, 3)}
      {MultNums(2, 2)}
      {MultAnother(2, 2)}
      {totalSum(1, 1, 2, 2)}
      {totalAdd(1, 1, 2, 2)}
    </>
  )
}

export default App

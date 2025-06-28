// code your solution here
// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

let win //for some reason npmtest won't pass unless I declare this here 😅
const superbowlWin = (array) => {
    win = array.find(item => item["result"] === "W")
    return win ? win.year : undefined

}
console.log(superbowlWin(record))

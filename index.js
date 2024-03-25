const java= [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    
  ]

    
function superbowlWin(java){
    const result=java.find(java=>java.result==="W")
    return result ? result.year : undefined;
}

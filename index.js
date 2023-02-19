let valueExibition = [];
let timer = 0;

function runTaskA() {
  valueExibition.push("A ")
}
function runTaskB() {
  valueExibition.push("B")
}
function runTaskC() {
  valueExibition.push("C")
}
function runTaskD() {
  valueExibition.push("D")
}
function runTaskE() {
  valueExibition.push("E")
}

setInterval(() => {
  
  console.log(`${timer} ${valueExibition[0]} ${valueExibition[1]} - Size of array: ${valueExibition.length}`)
  timer++;



  if (timer === 1) {
    runTaskA()
  }
  if (timer === 2) {
    runTaskA()
    runTaskB()
  }
  if (timer === 3) {
    runTaskA()
    runTaskC()
  }
  if (timer === 4) {
    runTaskA()
    runTaskD()
  }
  if (timer === 5) {
    runTaskA()
    runTaskD()
  }
  if (timer % 5 === 2) {
    runTaskA()
    runTaskB('B');
  }
  if (timer % 5 === 3) {
    runTaskA()
    runTaskC();
  }
  if (timer % 10 === 4) {
    runTaskA()
    runTaskD();
  }
  if (timer % 10 === 5) {
    runTaskA()
    runTaskE();
  }


}, 1000);

let valueExibition = [];
let timer = 0;

function addTaskA() {
  valueExibition.push("A")
}

function addTaskB() {
  valueExibition.push("B")
}

function addTaskC() {
  valueExibition.push("C")
}

function addTaskD() {
  valueExibition.push("D")
}

function addTaskE() {
  valueExibition.push("E")
}

function clearTasks() {
  valueExibition = [];
}

setInterval(() => {
  timer++;
  clearTasks();

  if (timer % 1 === 0) {
    addTaskA();
  }
  if (timer % 5 === 2) {
    addTaskB();
  }
  if (timer % 5 === 3) {
    addTaskC();
  }
  if (timer % 10 === 4) {
    addTaskD();
  }
  if (timer % 10 === 5) {
    addTaskE();
  }

  console.log(`${timer} -> ${valueExibition.join(" ")}`);
}, 1000);

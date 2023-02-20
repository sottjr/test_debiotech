const valueExibition = [];
let timer = 0;
let intervalId;

function addTaskA() {
    valueExibition.push("A");
}

function addTaskB() {
    valueExibition.push("B");
}

function addTaskC() {
    valueExibition.push("C");
}

function addTaskD() {
    valueExibition.push("D");
}

function addTaskE() {
    valueExibition.push("E");
}

function clearTasks() {
    valueExibition.length = 0;
}

function startTimer() {
    intervalId = setInterval(() => {
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

        const timerDisplay = document.getElementById("timerDisplay");
        const tasksDisplay = document.getElementById("tasksDisplay");

        timerDisplay.innerHTML = `Timer: ${timer} s`;
        tasksDisplay.innerHTML = `Running tasks: ${valueExibition.join(" ")}`;
        console.log(`${timer} -> ${valueExibition.join(" ")}`);

        //information on screen when running

        const content = document.querySelector('#displayContent');
        const newElement = document.createElement("button");
        newElement.classList.add('btnTasks');
        newElement.textContent = `${timer} -> ${valueExibition.join(" ")}`;
        content.appendChild(newElement);
    }, 1000);
}

function stopTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    timer = 0;
    clearTasks();

    const timerDisplay = document.getElementById("timerDisplay");
    const tasksDisplay = document.getElementById("tasksDisplay");

    timerDisplay.innerHTML = `Timer: ${timer} s`;
    tasksDisplay.innerHTML = `Running tasks: ${valueExibition.join(", ")}`

    const meuContainer = document.getElementById('displayContent');
    meuContainer.innerHTML = "";
}

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
let runningTasks = [];
let time = 0;

setInterval(() => {
  time++;

  // Task A runs every second
  if (time % 1 === 0) {
    runTask('A');
  }

  // Task B runs every 5 seconds
  if (time % 5 === 0) {
    runTask('B');
  }

  // Task C runs every 5 seconds
  if (time % 5 === 0) {
    runTask('C');
  }

  // Task D runs every 10 seconds
  if (time % 10 === 0) {
    runTask('D');
  }

  // Task E runs every 10 seconds
  if (time % 10 === 0) {
    runTask('E');
  }

  console.log(`${time} -> ${runningTasks.join(' ')}`);
}, 1000);

# Timer and Task Scheduler

This is a timer that runs a set of scheduled tasks at certain intervals. Tasks are performed under the following conditions:

Task A runs every second.
Tasks B and C run first before the first 5 second interval, then every 5 seconds.
Tasks D and E run first before the first 10 second interval, and then every 10 seconds.

# How it works

The timer and task scheduler consists of an infinite loop with a 1 second interval between each execution. During each interval, scheduled tasks are checked to determine whether they should run. Each task is added to an array of displayed tasks that is displayed in the console.

The timer can be started, paused and restarted using the buttons provided on the user interface.

# Summary of features:

• Addition of tasks "A", "B", "C", "D" and "E" at regular intervals of time;
• Display of current time on screen;
• Display of running tasks on the screen;
• Registration of time and tasks running on buttons that are dynamically created on the page at each time interval;
• Start, pause, and restart timing and task sequence.

# Functions

addTaskA()
This function is responsible for adding task A to the array of displayed tasks. Task A runs every second.

addTaskB()
This function is responsible for adding task B to the array of displayed tasks. Task B runs first before the first 5 second interval, then every 5 seconds.

addTaskC()
This function is responsible for adding task C to the array of displayed tasks. Task C runs first before the first 5 second interval, then every 5 seconds.

addTaskD()
This function is responsible for adding task D to the array of displayed tasks. Task D runs first before the first 10 second interval, then every 10 seconds.

addTaskE()
This function is responsible for adding task E to the array of displayed tasks. Task E runs first before the first 10 second interval, then every 10 seconds.

clearTasks()
This function is responsible for clearing the array of displayed tasks.

startTimer()
This function is responsible for starting the timer and executing scheduled tasks.

stopTimer()
This function is responsible for pausing the timer and the execution of scheduled tasks.

resetTimer()
This function is responsible for resetting the timer and the array of displayed tasks.

# How to use this:

For you to run the project, you can open the index.html page that will be made available in this link, inside this page you can click on the start button, to start running all the processes, it will be displayed in real time on the home screen and so will you you can consult the console.log where the tasks that are currently active are also displayed.

# Note:

There is an exercise-resolution file with the exercise resolution in a simplified way without integration with the frontend, where this file was created with an algorithm in pure javascript, this file can be opened in any IDE that accepts javascript.

The front end was developed just for better visualization of the data, the integration between html, css and javascipt was carried out through the index.js file.
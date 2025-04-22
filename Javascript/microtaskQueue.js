//microtask queue:
// task associated with the asynchronous code have to wait for their exectution in macrotask queue.
// but task associated with promise waits for the execution in microtask queue.

//the task waiting in the microtask queue will be execute in first priority in comparision to callback queue

// Micro-tasks are often scheduled for things that are required to be completed immediately after the execution of the current script.
// On completion of one macro-task, the event loop moves on to the micro-task queue.
// The event loop does not move to the next task outside of the micro-task queue until the all the tasks
// inside the micro-task queue are completed. This implies that the micro-task queue has a higher priority.

//queueMicrotask() is a method which can be used to add task to Micro Task -

queueMicrotask(() => {
    // Code to be run inside the micro-task 
});

//Micro task examples — process.nextTick, Promises, queueMicrotask, MutationObserver
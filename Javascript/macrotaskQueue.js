// the macro-task queue is used for asynchronous statements.

// All micro - tasks logged are processed in one fell swoop in a single macro - task execution cycle. 
// In comparison, the macro - task queue has a lower priority.Macro - tasks include parsing HTML, generating DOM,
//     executing main thread JavaScript code and other events such as page loading,
//         input, network events, timer events, etc.

// Macro task examples — setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI Rendering
const { performance } = require('perf_hooks');
const start = performance.now();
// Code section to measure the performance
const end = performance.now();
console.log(`Elapsed time: ${(end-start).toFixed(2)} milliseconds`);
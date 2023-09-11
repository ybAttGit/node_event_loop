const { performance } = require('perf_hooks');
const { eventLoopUtilization } = require('node:perf_hooks').performance;
setImmediate(() => {
	const start = performance.now();
	const elu = eventLoopUtilization();
	let sum = 0;
	for (let i = 0; i < 100; i++) {
		setTimeout(function() {
		  sum = sum +1;
		}, 60);
	}
	const end = performance.now();
	console.log(`ELU utilization: ${eventLoopUtilization(elu).utilization}`);
	console.log(`Elapsed time: ${(end-start).toFixed(2)} milliseconds`);
}); 
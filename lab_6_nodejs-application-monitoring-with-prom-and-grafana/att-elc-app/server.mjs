import http from 'http';
import { parse } from 'url';
import client from 'prom-client';

// Create a Registry which registers the metrics
const register = new client.Registry();

// Add a default label which is added to all metrics
register.setDefaultLabels({
    app: 'att-elc-app',
});


// Enable the collection of default metrics
client.collectDefaultMetrics({ register, gcDurationBuckets:[0.001, 0.01, 0.1, 1, 2, 5] });

// Create a histogram metric
const httpRequestDurationMicroseconds = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in microseconds',
    labelNames: ['method', 'route', 'code'],
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
});

// Register the histogram
register.registerMetric(httpRequestDurationMicroseconds);

//TODO: I don't understand what is these end call
// Define the HTTP server
const server = http.createServer(async (req, res) => {
    // Start the timer
    const end = httpRequestDurationMicroseconds.startTimer();

    // Retrieve route from request object
    const route = parse(req.url).pathname;

    if (route === '/metrics') {
        // Return all metrics in the Prometheus exposition format
        res.setHeader('Content-Type', register.contentType);
        res.end(await register.metrics());
        end({ route, code: res.statusCode, method: req.method });
    } else {
        // End timer and add labels
        res.end('data gathered.');
        end({ route, code: res.statusCode, method: req.method });
    }
});

// Start the HTTP server which exposes the metrics on http://localhost:8080/metrics
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
# LAB 6 – Performance analysis with Prometheus and Grafana
## Prerequisits
Make sure you have docker desktop running.
https://www.docker.com/products/docker-desktop/
## Initial Setup
cd att-elc-app
```
npm install
```
```
npm start
```
From the root folder, run
```
docker-compose up
```
Go to http://localhost:3000/dashboard/import
And import the node-js-application-dashboard.json file from the root folder

## Creating a load on the node.js server
Go to artillery folder
```
npm install -g artillery
```
Then run 
```
artillery run load-script.yml
```
This will create a load on the node.js application of 10  new users every seconds for 60 seconds that will browse to http://localhost:8080/

We can see that after the load, there is a spike in active handles/Requests Total and in Process Cpu Usage in the Grafana

Based on:
https://codersociety.com/blog/articles/nodejs-application-monitoring-with-prometheus-and-grafana
Tell how to add a dashboard with the panel's metrics.
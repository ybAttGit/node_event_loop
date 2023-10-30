# LAB 6 – TODO: Name
## Initial Setup
```
npm install
```
```
npm start
```
## Activate prometheus: ##
Replace C:\\Git_work\NODE_ATT\node_event_loop\lab_6_nodejs-application-monitoring-with-prom-and-grafana\ with the path to where you downloaded this lab

```
docker run --rm -p 9090:9090 -v C:\\Git_work\NODE_ATT\node_event_loop\lab_6_nodejs-application-monitoring-with-prom-and-grafana\prometheus.yml:/etc/prometheus/prometheus.yml  prom/prometheus:v2.20.1
```
## Activate grafana: ##
Replace C:\\Git_work\NODE_ATT\node_event_loop\lab_6_nodejs-application-monitoring-with-prom-and-grafana\ with the path to where you downloaded this lab

```
docker run --rm -p 3333:3333 -e GF_AUTH_DISABLE_LOGIN_FORM=true -e GF_AUTH_ANONYMOUS_ENABLED=true -e GF_AUTH_ANONYMOUS_ORG_ROLE=Admin -v C:\\Git_work\NODE_ATT\node_event_loop\lab_6_nodejs-application-monitoring-with-prom-and-grafana\datasources.yml:/etc/grafana/provisioning/datasources/datasources.yml grafana/grafana:7.1.5
```

Based on:
https://codersociety.com/blog/articles/nodejs-application-monitoring-with-prometheus-and-grafana
Tell how to add a dashboard with the panel's metrics.
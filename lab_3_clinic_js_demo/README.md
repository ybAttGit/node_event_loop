# LAB 3 – Installing Clinic.js and running Doctor on LAB 1+2 scripts.
Go to Doctor => Fixing an I/O problem

## Installing clinic
Auto cannon is required for some of the testing.
```
npm install -g autocannon
```
Then, Install clinic
```
npm install -g clinic
clinic doctor --help
```
Make sure you see the clinic doctor help text.

## Running clinic doctor
Go to your desired lab folder
```
clinic doctor --on-port 'autocannon localhost:$PORT' -- node index.js
```
## Running clinic flame
Go to your desired lab folder
```
clinic flame --on-port 'autocannon localhost:$PORT' -- node index.js
```
## Running clinic bubbleproof
Go to your desired lab folder
```
clinic bubbleprof --on-port 'autocannon localhost:$PORT' -- node slow-io
```
